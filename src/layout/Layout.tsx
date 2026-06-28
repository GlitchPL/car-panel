import React, { PropsWithChildren } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';

/**
 * Main layout component used across the application.
 * It renders a fixed sidebar with navigation links and a header area that contains
 * the page title and an actions panel. The children passed to this component are
 * rendered in the main content zone.
 */
export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex h-screen bg-light-50 dark:bg-dark-900 text-light-800 dark:text-dark-200">
    {/* Sidebar navigation */}
    <Sidebar />

    {/* Main content area */}
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header / top bar */}
      <Topbar />
      {/* Page specific content */}
      <main className="flex-1 overflow-y-auto p-4" role="main">
        {children}
      </main>
    </div>
  </div>
);
