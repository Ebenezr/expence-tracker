import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { DUMMY_EXPENSES } from '@/data/data';
import ExpenseCard from '@/components/ExpenceCard';

import { formatDate } from '@/utils/date';
interface RecentExpenseProps {
  expense: string;
}

const Expense: React.FC<RecentExpenseProps> = () => {
  const renderItem = ({ item }: any) => {
    return (
      <ExpenseCard
        title={item.title}
        date={formatDate(item.date)}
        amount={item.amount}
      />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlashList
        data={DUMMY_EXPENSES}
        renderItem={renderItem}
        estimatedItemSize={100}
      />
    </SafeAreaView>
  );
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
});
