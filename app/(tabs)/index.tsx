import ExpenseCard from '@/components/ExpenceCard';
import { DUMMY_EXPENSES } from '@/data/data';
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const renderItem = ({ item }: any) => {
    const year = item.date.getFullYear();
    if (year !== 2024) {
      return null;
    }
    return (
      <ExpenseCard
        title={item.title}
        date={item.date.toLocaleDateString()}
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
