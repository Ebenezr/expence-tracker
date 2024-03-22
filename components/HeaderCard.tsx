import { StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from 'react-native';

const HeaderCard = ({ expences }: any) => {
  const scheme = useColorScheme();
  const sumExpenses = expences?.reduce((total: any, expense: any) => {
    const today = new Date();
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    if (expense.date >= sevenDaysAgo && expense.date <= today) {
      return total + expense.amount;
    }
    return total;
  }, 0);

  return (
    <View
      style={{
        ...styles.header,
        backgroundColor: Colors[scheme ?? 'dark'].accent,
      }}
    >
      <Text
        style={{ ...styles.headerText, color: Colors[scheme ?? 'dark'].text }}
      >
        Last 7 Days
      </Text>
      <Text
        style={{ ...styles.totalText, color: Colors[scheme ?? 'dark'].text }}
      >
        KES {sumExpenses}
      </Text>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
