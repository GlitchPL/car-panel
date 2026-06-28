import { useLocalStorage } from '../hooks/useLocalStorage';
import { vehicle, expenses as mockExpenses, tasks as mockTasks, parts as mockParts } from '../data/mockData';

export function usePersistedVehicle() {
  return useLocalStorage('vehicle', vehicle);
}

export function usePersistedExpenses() {
  return useLocalStorage('expenses', mockExpenses);
}

export function usePersistedTasks() {
  return useLocalStorage('tasks', mockTasks);
}

export function usePersistedParts() {
  return useLocalStorage('parts', mockParts);
}

export function usePersistedTheme() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
  // apply theme to document root
  useEffect(() => {
    if (theme === 'dark') window.document.documentElement.classList.add('dark');
    else window.document.documentElement.classList.remove('dark');
  }, [theme]);
  return [theme, setTheme] as const;
}
