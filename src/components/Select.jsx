import { useEffect, useId, useRef, useState } from 'react';

/**
 * Themed replacement for a native <select>.
 * Keeps a hidden input so the value still travels with normal form submission.
 */
export default function Select({ name, options, placeholder, value, onChange, labelId }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef(null);
  const panelRef = useRef(null);
  const baseId = useId();

  const selectedIndex = options.indexOf(value);
  const hasValue = selectedIndex >= 0;
  const optionId = (i) => `${baseId}-opt-${i}`;

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  // Keep the highlighted option in view
  useEffect(() => {
    if (!open || activeIndex < 0) return;
    panelRef.current
      ?.querySelector(`#${CSS.escape(optionId(activeIndex))}`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [open, activeIndex]);

  const openWith = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const commit = (index) => {
    onChange(options[index]);
    setOpen(false);
    setActiveIndex(index);
  };

  // Older engines emit legacy key names — normalise them
  const LEGACY_KEYS = { Down: 'ArrowDown', Up: 'ArrowUp', Esc: 'Escape', Return: 'Enter', Spacebar: ' ' };

  const handleKeyDown = (e) => {
    switch (LEGACY_KEYS[e.key] ?? e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) openWith(hasValue ? selectedIndex : 0);
        else setActiveIndex((i) => (i + 1) % options.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) openWith(hasValue ? selectedIndex : options.length - 1);
        else setActiveIndex((i) => (i - 1 + options.length) % options.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!open) openWith(hasValue ? selectedIndex : 0);
        else if (activeIndex >= 0) commit(activeIndex);
        break;
      case 'Home':
        if (open) {
          e.preventDefault();
          setActiveIndex(0);
        }
        break;
      case 'End':
        if (open) {
          e.preventDefault();
          setActiveIndex(options.length - 1);
        }
        break;
      case 'Escape':
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        break;
      case 'Tab':
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`select${open ? ' select--open' : ''}`} ref={wrapRef}>
      <input type="hidden" name={name} value={hasValue ? value : ''} />
      <button
        type="button"
        className="select__trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId}
        aria-controls={`${baseId}-list`}
        aria-activedescendant={open && activeIndex >= 0 ? optionId(activeIndex) : undefined}
        onClick={() => (open ? setOpen(false) : openWith(hasValue ? selectedIndex : 0))}
        onKeyDown={handleKeyDown}
      >
        <span className={hasValue ? 'select__value' : 'select__value select__value--empty'}>
          {hasValue ? value : placeholder}
        </span>
        <svg className="select__chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="select__panel" id={`${baseId}-list`} role="listbox" ref={panelRef}>
          {options.map((opt, i) => (
            <li
              key={opt}
              id={optionId(i)}
              role="option"
              aria-selected={i === selectedIndex}
              data-active={i === activeIndex}
              className="select__option"
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => commit(i)}
            >
              <span>{opt}</span>
              {i === selectedIndex && (
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 6.5 4.75 9 10 3.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
