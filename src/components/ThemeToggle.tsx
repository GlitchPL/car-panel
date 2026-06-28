import { useEffect, useState } from 'react';

/**
 * ThemeToggle – minimalistyczny przełącznik jasny/ciemny.
 *
 * - Dodaje/usuwa klasę `dark` na elemencie <html>.
 * - Przechowuje wybór w localStorage (klucz `theme`).
 * - Podstawowy, estetyczny wygląd pasujący do topbara.
 */
export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  // ustawiamy początkowy tryb przy zamontowaniu komponentu
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (stored === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      // brak zapisanej preferencji → systemowa
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefers) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      }
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    localStorage.setItem('theme', next ? 'dark' : 'light');
    if (next) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    setIsDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Przełącz tryb jasny/ciemny"
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};
