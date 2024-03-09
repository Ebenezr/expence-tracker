import React from 'react';
import { View, Text } from 'react-native';

interface RecentExpenseProps {
  expense: string;
}

const Expense: React.FC<RecentExpenseProps> = ({ expense }) => {
  return (
    <View>
      <Text>Recent Expense</Text>
      <Text>{expense}</Text>
    </View>
  );
};

export default Expense;
