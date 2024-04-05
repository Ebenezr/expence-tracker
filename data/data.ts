interface ExpenseType {
  id?: string;
  title: string;
  amount: number;
  date: Date | any;
}

const DUMMY_EXPENSES: ExpenseType[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e6', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e7',
    title: 'Car Insurance(VW)',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e8',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e9',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e10', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e11',
    title: 'Bike Insurance(Rebel 1100)',
    amount: 294.67,
    date: new Date(2024, 2, 18),
  },
  {
    id: 'e12',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2024, 2, 12),
  },
  {
    id: 'e13',
    title: 'Groceries',
    amount: 150.25,
    date: new Date(2024, 2, 19),
  },
  { id: 'e14', title: 'Restaurant', amount: 75.5, date: new Date(2024, 1, 5) },
  {
    id: 'e15',
    title: 'Movie Tickets',
    amount: 30.0,
    date: new Date(2024, 3, 2),
  },
  {
    id: 'e16',
    title: 'Gym Membership',
    amount: 200.0,
    date: new Date(2024, 3, 20),
  },
  { id: 'e17', title: 'Vacation', amount: 1000.0, date: new Date(2024, 4, 1) },
  {
    id: 'e18',
    title: 'Electronics',
    amount: 500.0,
    date: new Date(2024, 3, 22),
  },
  { id: 'e19', title: 'Books', amount: 50.0, date: new Date(2024, 6, 5) },
  { id: 'e20', title: 'Clothing', amount: 80.0, date: new Date(2024, 7, 20) },
  {
    id: 'e21',
    title: 'Home Decor',
    amount: 200.0,
    date: new Date(2024, 2, 24),
  },
  { id: 'e22', title: 'Gifts', amount: 100.0, date: new Date(2024, 9, 1) },
  {
    id: 'e23',
    title: 'Car Maintenance',
    amount: 700.0,
    date: new Date(2024, 2, 26),
  },
  {
    id: 'e24',
    title: 'Pet Supplies',
    amount: 50.0,
    date: new Date(2024, 2, 27),
  },
];

export { ExpenseType, DUMMY_EXPENSES };
