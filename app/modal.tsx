import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, TextInput } from 'react-native';
import { View } from '@/components/Themed';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { DUMMY_EXPENSES } from '@/data/data';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { formatDate } from '@/utils/date';
import {
  addExpense,
  removeExpense,
  editExpense,
} from '../store/slices/expenseSlice';

export default function ModalScreen() {
  const dispatch = useDispatch();
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { id, title, date, amount } = params;
  const isEditing = !!title;
  const [expense, setExpence] = useState({
    id: id ?? '',
    title: title ?? '',
    date: date ?? '',
    amount: amount ?? '',
  });
  const [dateInput, setDateInput] = useState(dayjs());

  useLayoutEffect(() => {
    if (isEditing) {
      navigation.setOptions({
        title: 'Edit Expence',
      });
    }
    navigation.setOptions({
      title: 'Add Expence',
    });
  }, [isEditing, title, navigation]);

  const deleteExpence = (id: string) => {
    setTimeout(async () => {
      dispatch(removeExpense(id));
    }, 2000);
    navigation.goBack();
  };

  const cancleHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expense: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }) => {
    setTimeout(async () => {
      if (isEditing) {
        dispatch(editExpense(expense));
      } else {
        dispatch(addExpense({ ...expense, id: Math.random().toString() }));
      }
      navigation.goBack();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputWrapper}>
          <Text style={styles.title}>Title:</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter Title'
            value={expense?.title ? expense.title : ''}
            onChangeText={(text) => setExpence({ ...expense, title: text })}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.title}>Date:</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter Date'
            value={expense?.date}
            onChangeText={(text) => setExpence({ ...expense, date: text })}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.title}>Amount:</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter Amount'
            value={expense?.amount}
            onChangeText={(text) => setExpence({ ...expense, amount: text })}
            keyboardType='numeric'
          />
        </View>
      </View>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={cancleHandler}
            color='text'
            variant='outlined'
          >
            Cancel
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={() => {
              confirmHandler(expense);
            }}
            color='text'
            variant='contained'
          >
            {isEditing ? 'Save Changes' : 'Add Expence'}
          </PrimaryButton>
        </View>
      </View>
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
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,

    paddingHorizontal: 15,

    borderRadius: 50,
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',

    gap: 10,
  },
  buttonContainer: {
    width: '50%',
  },
  inputWrapper: {
    marginBottom: 20,
    // flexDirection: 'row',
    // alignItems: 'center',
    gap: 10,
  },
});
