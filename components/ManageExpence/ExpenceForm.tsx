import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Input from './Input';
import PrimaryButton from '../ui/PrimaryButton';
import { useLayoutEffect, useState } from 'react';
import dayjs from 'dayjs';
import { formatDate } from '@/utils/date';
import {
  addExpense,
  removeExpense,
  editExpense,
} from '../../store/slices/expenseSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'expo-router';

interface IExpence {
  id: string;
  title: string;
  date: string;
  amount: string;
}

const ExpenceForm = ({ id, amount, date, title }: IExpence) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  //   const { id, title, date, amount } = params;
  const [expense, setExpence] = useState({
    id: id ?? '',
    title: title ?? '',
    date: date ?? '',
    amount: amount ?? '',
  });
  const [dateInput, setDateInput] = useState(dayjs());

  const isEditing = !!title;

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

  const inputChangeHndler = (text: string, key: string) => {
    setExpence({ ...expense, [key]: text });
  };

  return (
    <View>
      <Input
        expense={expense}
        label='Title'
        textInputConfig={{
          placeholder: 'Enter Title',
          onChangeText: (text) => inputChangeHndler(text, 'title'),
          autoCorrect: true,
          multiline: true,
          value: expense.title,
        }}
      />
      <Input
        expense={expense}
        label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: (text) => inputChangeHndler(text, 'date'),
          value: expense.date,
        }}
      />
      <Input
        expense={expense}
        label='Amount'
        textInputConfig={{
          placeholder: 'Enter Amount',
          keyboardType: 'numeric',
          onChangeText: (text) => inputChangeHndler(text, 'amount'),
          value: expense.amount,
        }}
      />
      <View
        style={styles.separator}
        // lightColor='#eee'
        // darkColor='rgba(255,255,255,0.1)'
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
              //   confirmHandler(expense);
              console.log(expense);
              Alert.alert(
                'Confirm',
                'Are you sure you want to add this expence?',
                [
                  {
                    text: 'Yes',
                    onPress: () => {
                      confirmHandler({
                        ...expense,
                        date: dateInput.toDate(),
                        amount: +expense.amount,
                      });
                    },
                  },
                  {
                    text: 'No',
                    style: 'destructive',
                  },
                ]
              );
            }}
            color='text'
            variant='contained'
          >
            {isEditing ? 'Save Changes' : 'Add Expence'}
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default ExpenceForm;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',

    gap: 10,
  },
  buttonContainer: {
    width: '50%',
  },
});

{
  /* <View style={styles.inputWrapper}>
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
    </View> */
}
