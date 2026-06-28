import React from 'react';

/**
 * Reusable sidebar component used for navigation.
 */
export const Sidebar: React.FC = () => {
  const currentPath = window.location.pathname;
  return (
    <aside className="w-64 min-w-[16rem] flex-shrink-0 bg-white dark:bg-dark-700 border-r border-light-200 dark:border-dark-600">
      <nav aria-label="Main navigation" className="p-4 space-y-1">
        <a
          href="/dashboard"
          className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-light-100 dark:hover:bg-dark-800 transition-colors duration-200 ${currentPath === '/dashboard' ? 'bg-accent-500 text-white' : ''}`}
        >
          Dashboard
        </a>
        <a
          href="/parts"
          className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-light-100 dark:hover:bg-dark-800 transition-colors duration-200 ${currentPath === '/parts' ? 'bg-accent-500 text-white' : ''}`}
        >
          Parts
        </a>
        <a
          href="/expenses"
          className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-light-100 dark:hover:bg-dark-800 transition-colors duration-200 ${currentPath === '/expenses' ? 'bg-accent-500 text-white' : ''}`}
        >
          Expenses
        </a>
        <a
          href="/history"
          className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-light-100 dark:hover:bg-dark-800 transition-colors duration-200 ${currentPath === '/history' ? 'bg-accent-500 text-white' : ''}`}
        >
          Service
        </a>
      </nav>
    </aside>
  );
};
