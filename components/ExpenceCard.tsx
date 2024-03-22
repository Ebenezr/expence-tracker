import { ExpenseType } from '@/data/data';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from 'react-native';

const ExpenseCard = ({ title, date, amount }: ExpenseType) => {
  const scheme = useColorScheme();
  return (
    <View
      style={{
        ...styles.card,
        backgroundColor: Colors[scheme ?? 'dark'].whiteSmoke,
      }}
    >
      <View style={styles.leftContainer}>
        <Text style={{ ...styles.title, color: Colors[scheme ?? 'dark'].text }}>
          {title}
        </Text>
        <Text style={{ ...styles.date, color: Colors[scheme ?? 'dark'].gray }}>
          {date}
        </Text>
      </View>
      <View
        style={{
          ...styles.rightContainer,
        }}
      >
        <Text
          style={{
            ...styles.price,
            backgroundColor: Colors[scheme ?? 'dark'].background,
            color: Colors[scheme ?? 'dark'].text,
          }}
        >
          KES. {amount}
        </Text>
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
    padding: 5,
    borderRadius: 5,
    minWidth: 100,
    textAlign: 'right',
  },
});

export default ExpenseCard;
