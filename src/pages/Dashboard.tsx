import { usePersistedTasks, usePersistedExpenses, usePersistedParts, usePersistedTheme } from '../hooks/usePersistedData';

// Example usage in Dashboard component (just as a demonstration of hook)
export const Dashboard: React.FC = () => {
  const [tasks] = usePersistedTasks();
  const [expenses] = usePersistedExpenses();
  const [parts] = usePersistedParts();
  const [theme, setTheme] = usePersistedTheme();

  // rest of the component rendering using these persisted values...
  return null;
};
