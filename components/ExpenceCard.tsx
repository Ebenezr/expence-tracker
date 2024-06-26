import { ExpenseType } from '@/data/data';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import { router } from 'expo-router';
import { formatDate } from '@/utils/date';

interface ExpenseCardProps {
  id?: string;
  title?: string;
  date?: Date | string | any;
  amount?: number;
}

const ExpenseCard = ({ id, title, date, amount }: ExpenseCardProps) => {
  const scheme = useColorScheme();

  const expencePressHandler = () => {
    router.push({
      pathname: 'modal',
      params: {
        id,
        title,
        date,
        amount,
      },
    });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      onPress={expencePressHandler}
    >
      <View
        style={{
          ...styles.card,
          backgroundColor: Colors[scheme ?? 'dark'].whiteSmoke,
        }}
      >
        <View style={styles.leftContainer}>
          <Text
            style={{ ...styles.title, color: Colors[scheme ?? 'dark'].text }}
          >
            {title}
          </Text>
          <Text
            style={{ ...styles.date, color: Colors[scheme ?? 'dark'].gray }}
          >
            {formatDate(date ?? new Date().toISOString())}
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
    </Pressable>
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
