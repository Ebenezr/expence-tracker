import ExpenseCard from '@/components/ExpenceCard';
import HeaderCard from '@/components/HeaderCard';
import { DUMMY_EXPENSES } from '@/data/data';
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView, StyleSheet } from 'react-native';

import { formatDate } from '@/utils/date';
export default function App() {
  const renderItem = ({ item }: any) => {
    const year = item.date.getFullYear();
    if (year !== 2024) {
      return null;
    }

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
      <HeaderCard expences={DUMMY_EXPENSES} />
      <FlashList
        data={DUMMY_EXPENSES}
        renderItem={renderItem}
        estimatedItemSize={100}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
});
