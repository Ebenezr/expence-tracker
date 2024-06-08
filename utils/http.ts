import axios from 'axios';
import { REACT_APP_FIREBASE_URI } from '@env';
interface Expense {
  id?: string;
  title: string;
  amount: number;
  date: string;
}

export const storeExpense = async (expense: Expense) => {
  try {
    const response = await axios.post(
      `${REACT_APP_FIREBASE_URI}/expense.json`,
      expense
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchExpenses = async () => {
  try {
    const response = await axios.get(`${REACT_APP_FIREBASE_URI}/expense.json`);

    const expenses: Expense[] = [];

    for (const key in response.data) {
      expenses.push({
        id: key,
        title: response.data[key].title,
        amount: response.data[key].amount,
        date: response.data[key].date,
      });
    }
    return expenses;
  } catch (error) {
    console.log(error);
  }
};

export const removeExpense = async (id: string) => {
  try {
    const response = await axios.delete(
      `${REACT_APP_FIREBASE_URI}/expense/${id}.json`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const editExpense = async (expense: Expense) => {
  try {
    const response = await axios.put(
      `${REACT_APP_FIREBASE_URI}/expense/${expense.id}.json`,
      expense
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
