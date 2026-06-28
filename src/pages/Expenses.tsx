import { expenses } from '../data/mockData';

export const Expenses: React.FC = () => (
  <section className="space-y-8">
    {/* Summary card */}
    <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-dark-700 border border-light-200 dark:border-dark-600">
      <h2 className="text-lg font-semibold mb-2">Expenses Summary</h2>
      <ul className="space-y-1 text-sm text-light-800 dark:text-dark-300">
        {(() => {
          const total = expenses.reduce((sum, e) => sum + e.amount, 0);
          return (
            <>
              <li>Total this year: ${total}</li>
              {['Fuel', 'Oil change', 'Tires'].map(cat => (
                <li key={cat}>
                  {cat}: ${expenses
                    .filter(e => e.category === cat)
                    .reduce((sum, e) => sum + e.amount, 0)}
                </li>
              ))}
            </>
          );
        })()}
      </ul>
    </div>

    {/* Table of expenses */}
    <div className="overflow-x-auto rounded-lg shadow-sm bg-white dark:bg-dark-700 border border-light-200 dark:border-dark-600">
      <table className="min-w-full divide-y divide-light-200 dark:divide-dark-600">
        <thead>
          <tr className="bg-light-100 dark:bg-dark-800">
            <th className="px-4 py-2 text-left text-sm font-medium text-light-900 dark:text-dark-100">Date</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-light-900 dark:text-dark-100">Category</th>
            <th className="px-4 py-2 text-right text-sm font-medium text-light-900 dark:text-dark-100">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-light-200 dark:divide-dark-600">
          {expenses.map(e => (
            <tr key={e.id} className="hover:bg-light-50 dark:hover:bg-dark-700 transition-colors">
              <td className="px-4 py-2 text-sm">{e.date}</td>
              <td className="px-4 py-2 text-sm">{e.category}</td>
              <td className="px-4 py-2 text-right text-sm">${e.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
