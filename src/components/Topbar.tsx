import { ThemeToggle } from './ThemeToggle';

export const Topbar: React.FC = () => (
  <header className="flex items-center justify-between p-4 bg-white dark:bg-dark-700 border-b border-light-200 dark:border-dark-600 transition-colors duration-200" role="banner">
    {/* Left: Title and vehicle info */}
    <div className="flex flex-col gap-1">
      <h1 className="text-xl font-semibold">Car Dashboard</h1>
      <div className="text-sm text-light-600 dark:text-dark-400">
        <span className="font-medium mr-4">Honda Civic 2023</span>
        <span>Km: <strong>12 345</strong></span>
      </div>
    </div>

    {/* Right: Quick actions & theme toggle */}
    <div className="flex items-center space-x-2">
      <button type="button" className="px-3 py-1 rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors duration-200">
        Add Service
      </button>
      <button type="button" className="px-3 py-1 rounded-md border border-light-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-light-800 dark:text-dark-200 hover:bg-light-100 dark:hover:bg-dark-800 transition-colors duration-200">
        Add Fuel
      </button>
      <ThemeToggle />
    </div>
  </header>
);
