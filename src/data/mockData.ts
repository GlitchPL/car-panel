export const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2023,
  odometer: 12345,
  lastService: new Date('2026-06-15'),
};

export const expenses = [
  { id: 1, date: '2026-06-20', category: 'Fuel', amount: 70 },
  { id: 2, date: '2026-05-15', category: 'Oil change', amount: 150 },
  { id: 3, date: '2026-04-10', category: 'Tires', amount: 200 },
];

export const tasks = [
  {
    id: 1,
    title: 'Check oil level',
    priority: 'High',
    status: 'Pending',
    due: '2026-07-01',
  },
  {
    id: 2,
    title: 'Replace brake pads',
    priority: 'Medium',
    status: 'In Progress',
    due: '2026-08-15',
  },
  {
    id: 3,
    title: 'Schedule maintenance',
    priority: 'Low',
    status: 'Pending',
    due: '2026-09-10',
  },
];
