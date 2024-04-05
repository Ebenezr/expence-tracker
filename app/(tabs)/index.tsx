import ExpenseCard from '@/components/ExpenceCard';
import HeaderCard from '@/components/HeaderCard';
import { DUMMY_EXPENSES } from '@/data/data';
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
  const renderItem = ({ item }: any) => {
    const year = item.date.getFullYear();
    if (year !== 2024) {
      return null;
    }

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
      <Text style={styles.fallBackText}>
        {' '}
        No expenses registered for the last 7 days
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <HeaderCard expences={DUMMY_EXPENSES} />
      {fallBackContent}
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
  fallBackText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
});
