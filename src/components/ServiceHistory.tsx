import React, { useState } from 'react';

interface ServiceEntry {
  id: string;
  date: string; // ISO
  description: string;
  cost: number;
  notes?: string;
}

import React, { useState } from 'react';

interface ServiceEntry {
  id: string;
  date: string; // ISO
  description: string;
  cost: number;
  notes?: string;
}

const History: React.FC = () => {
  const [entries] = useState<ServiceEntry[]>([
    { id: '1', date: '2026-06-20', description: 'Oil change', cost: 150, notes: '' },
    { id: '2', date: '2026-05-15', description: 'Brake pad replacement', cost: 200, notes: 'Replaced front pads' },
    { id: '3', date: '2026-04-10', description: 'Tire rotation', cost: 70, notes: '' },
  ]);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Service History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-light-100 dark:bg-dark-800">
            <th className="px-4 py-2 text-left text-sm font-medium text-light-900 dark:text-dark-100">Date</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-light-900 dark:text-dark-100">Description</th>
            <th className="px-4 py-2 text-right text-sm font-medium text-light-900 dark:text-dark-100">Cost ($)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-light-200 dark:divide-dark-600">
          {entries.map(e => (
            <tr key={e.id} className="hover:bg-light-50 dark:hover:bg-dark-700 transition-colors">
              <td className="px-4 py-2 text-sm">{new Date(e.date).toLocaleDateString()}</td>
              <td className="px-4 py-2 text-sm">{e.description}</td>
              <td className="px-4 py-2 text-right text-sm">${e.cost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
