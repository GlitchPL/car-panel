import React, { useState } from 'react';

interface Expense {
  id: string;
  date: string; // ISO
  amount: number;
  description?: string;
}

const Expenses: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [form, setForm] = useState({ date: '', amount: '', description: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const addExpense = () => {
    if (!form.date || !form.amount) return;
    const newExp: Expense = {
      id: Date.now().toString(),
      date: form.date,
      amount: parseFloat(form.amount),
      description: form.description
    };
    setExpenses(prev => [...prev, newExp]);
    setForm({ date: '', amount: '', description: '' });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>
      <form onSubmit={e => { e.preventDefault(); addExpense(); }} className="space-y-3 mb-6">
        <div><label>Data:</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required className="border p-1 w-full" /></div>
        <div><label>Ilość ($):</label>
          <input type="number" step="0.01" name="amount" value={form.amount} onChange={handleChange} required className="border p-1 w-full" /></div>
        <div><label>Opis:</label>
          <input type="text" name="description" value={form.description} onChange={handleChange} className="border p-1 w-full" /></div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Dodaj</button>
      </form>

      {expenses.length === 0 ? (
        <p>Brak wydatków.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead><tr><th className="border p-1">Data</th><th className="border p-1">Kwota</th><th className="border p-1">Opis</th></tr></thead>
          <tbody>{expenses.map(e => (
            <tr key={e.id} className="border p-1"><td>{new Date(e.date).toLocaleDateString()}</td><td>${e.amount.toFixed(2)}</td><td>{e.description}</td></tr>
          ))}</tbody>
        </table>
      )}
    </div>
  );
};

export default Expenses;
