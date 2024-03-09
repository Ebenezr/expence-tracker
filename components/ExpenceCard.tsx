import { ExpenseType } from '@/data/data';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpenseCard = ({ title, date, amount }: ExpenseType) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.price}>KES {amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 5,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#ff6347',
    padding: 5,
    borderRadius: 5,
  },
});

export default ExpenseCard;
