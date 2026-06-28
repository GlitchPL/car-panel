import { tasks } from '../data/mockData';

export const Todo: React.FC = () => (
  <section className="p-4">
    <h2 className="text-xl font-semibold mb-4">Todo List</h2>
    <ul className="space-y-2">
      {tasks.map(t => (
        <li key={t.id} className="flex items-center justify-between bg-white dark:bg-dark-700 rounded-md shadow-sm p-2 border border-light-200 dark:border-dark-600">
          <div>
            <span className="font-medium">{t.title}</span> •
            <span className="ml-1 text-sm" title={t.priority}>({t.priority})</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="px-2 py-0.5 rounded text-xs font-medium bg-green-500 text-white hover:bg-green-600 transition-colors">Done</button>
            <span className="text-sm" title={t.due}>Due: {t.due}</span>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
