import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { DUMMY_EXPENSES } from '@/data/data';
import ExpenseCard from '@/components/ExpenceCard';

interface RecentExpenseProps {
  expense: string;
}

const Expense: React.FC<RecentExpenseProps> = () => {
  const renderItem = ({ item }: any) => {
    return (
      <ExpenseCard title={item.title} date={item.date} amount={item.amount} />
    );
  };

  let fallBackContent;
  if (DUMMY_EXPENSES.length > 0) {
    fallBackContent = (
      <FlashList
        data={DUMMY_EXPENSES}
        renderItem={renderItem}
        estimatedItemSize={100}
      />
    );
  } else {
    fallBackContent = (
      <Text style={styles.fallBackText}>No expenses found</Text>
    );
  }
  return <SafeAreaView style={styles.screen}>{fallBackContent}</SafeAreaView>;
};

export default Expense;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  categotyWrapper: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  fallBackText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
});
