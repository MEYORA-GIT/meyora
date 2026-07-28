import { useCallback, useState } from 'react';

export function useToggleIndex() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return [openIndex, toggle];
}
