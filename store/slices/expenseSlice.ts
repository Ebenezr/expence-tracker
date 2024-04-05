import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DUMMY_EXPENSES } from '@/data/data';

interface Expense {
  id?: string;
  title: string;
  amount: number;
  date: Date | any;
}

interface ExpensesState {
  expenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: DUMMY_EXPENSES,
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    editExpense: (state, action: PayloadAction<Expense>) => {
      const { id, title, amount, date } = action.payload;
      const existingExpense = state.expenses.find(
        (expense) => expense.id === id
      );
      if (existingExpense) {
        existingExpense.title = title;
        existingExpense.amount = amount;
        existingExpense.date = date;
      }
    },
  },
});

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
