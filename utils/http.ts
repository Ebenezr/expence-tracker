import * as dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

interface Expense {
  id?: string;
  title: string;
  amount: number;
  date: string;
}

export const storeExpense = async (expense: Expense) => {
  console.log('url', process.env.REACT_APP_FIREBASE_URI);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_FIREBASE_URI}/expense.json`,
      expense
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchExpenses = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_FIREBASE_URI}/expense.json`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const removeExpense = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_FIREBASE_URI}/expense/${id}.json`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const editExpense = async (expense: Expense) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_FIREBASE_URI}/expense/${expense.id}.json`,
      expense
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
