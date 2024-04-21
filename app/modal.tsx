import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { DUMMY_EXPENSES } from '@/data/data';
import { useDispatch } from 'react-redux';

import {
  addExpense,
  removeExpense,
  editExpense,
} from '../store/slices/expenseSlice';
import ExpenceForm from '@/components/ManageExpence/ExpenceForm';

export default function ModalScreen() {
  const dispatch = useDispatch();
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { id, title, date, amount } = params;

  const deleteExpence = (id: string) => {
    setTimeout(async () => {
      dispatch(removeExpense(id));
    }, 2000);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenceForm id={id} title={title} date={date} amount={amount} />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
});
