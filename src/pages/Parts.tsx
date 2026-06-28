import { partCategories, parts } from '../data/partCategories';

export const Parts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const filteredParts = selectedCategory
    ? parts.filter(p => p.category === selectedCategory)
    : [];

  // Simple hotspot colors based on status
  const getColorForStatus = (status: string) => {
    switch (status) {
      case 'ok': return '#2f855a';
      case 'check': return '#3182ce';
      default: return '#c53030'; // replace
    }
  };

  return (
    <div className="flex h-full">
      {/* Categories list */}
      <aside className="w-48 p-4 bg-white dark:bg-dark-700 border-r border-light-200 dark:border-dark-600">
        <h3 className="text-sm font-semibold mb-2">Categories</h3>
        {partCategories.map(c => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`w-full text-left px-2 py-1 rounded-md hover:bg-light-100 dark:hover:bg-dark-800 transition-colors duration-200 ${selectedCategory === c.id ? 'bg-accent-500 text-white' : ''}`}
          >
            {c.name}
          </button>
        ))}
      </aside>

      {/* Parts list */}
      <div className="flex-1 p-4 overflow-y-auto">
        {selectedCategory && (
          <ul className="space-y-2">
            {filteredParts.map(p => (
              <li key={p.id} className="p-3 rounded-md bg-white dark:bg-dark-700 border border-light-200 dark:border-dark-600 flex items-center justify-between">
                <span>{p.name}</span>
                <span style={{ background: getColorForStatus(p.status), width: '1rem', height: '1rem', borderRadius: '50%' }} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Car schematic placeholder */}
      <div className="w-64 p-4 bg-white dark:bg-dark-700 border-l border-light-200 dark:border-dark-600">
        <h3 className="text-sm font-semibold mb-2">Car Diagram</h3>
        {/* Minimal SVG with hotspot circles colored by status */}
        <svg viewBox="0 0 200 120" className="w-full h-auto text-gray-400">
          <rect x="20" y="30" width="160" height="60" rx="10" ry="10" stroke="#444" fill="none" />
          {filteredParts.map((p, i) => (
            <circle
              key={i}
              cx={50 + i * 30}
              cy={70}
              r="5"
              fill={getColorForStatus(p.status)}
              stroke="#fff"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};
