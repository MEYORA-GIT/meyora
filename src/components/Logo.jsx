import { useId } from 'react';
import { GOLD, MARK_H, MARK_PATHS, MARK_W, WORD_H, WORD_LETTERS, WORD_W } from './logoPaths';

/**
 * Meyora brand marks — the original logo from the visiting cards, redrawn as clean vectors
 * (Music/meyora-brand-kit). Gold by default; pass `gold={false}` to use `color` / currentColor.
 *
 * LogoMark — the five-piece "M" monogram. `size` is its height in px.
 * Wordmark — the MEYORA lettering (spineless E, stencil R, open A). `size` is roughly the old font size.
 * Logo     — mark + wordmark together.
 */

function GoldGradient({ id }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={GOLD.top} />
        <stop offset="0.55" stopColor={GOLD.mid} />
        <stop offset="1" stopColor={GOLD.bottom} />
      </linearGradient>
    </defs>
  );
}

export function LogoMark({ size = 22, gold = true, color, className, style }) {
  const id = `mg${useId().replace(/:/g, '')}`;
  const fill = gold ? `url(#${id})` : color || 'currentColor';
  return (
    <svg
      height={size}
      width={(size * MARK_W) / MARK_H}
      viewBox={`0 0 ${MARK_W} ${MARK_H}`}
      className={className}
      style={style}
      role="img"
      aria-label="Meyora"
    >
      {gold && <GoldGradient id={id} />}
      <g fill={fill}>
        {MARK_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}

export function Wordmark({ size = 15, gold = true, color = '#FFFFFF', style }) {
  const id = `wg${useId().replace(/:/g, '')}`;
  const h = size * 0.78;
  return (
    <svg
      height={h}
      width={(h * WORD_W) / WORD_H}
      viewBox={`0 -1 ${WORD_W} ${WORD_H}`}
      style={{ display: 'block', ...style }}
      role="img"
      aria-label="Meyora"
    >
      {gold && <GoldGradient id={id} />}
      <g fill={gold ? `url(#${id})` : color} fillRule="evenodd">
        {WORD_LETTERS.map(([x, d]) => (
          <path key={x} transform={`translate(${x} 0)`} d={d} />
        ))}
      </g>
    </svg>
  );
}

export default function Logo({ markSize = 22, textSize = 15, gold = true, color = '#FFFFFF', gap = 11 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap }}>
      <LogoMark size={markSize} gold={gold} color={color} style={{ flex: 'none' }} />
      <Wordmark size={textSize} gold={gold} color={color} />
    </span>
  );
}
