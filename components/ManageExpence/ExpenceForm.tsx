import { Alert, StyleSheet, View } from 'react-native';
import Input from './Input';
import PrimaryButton from '../ui/PrimaryButton';
import { useLayoutEffect } from 'react';
import { addExpense, editExpense } from '../../store/slices/expenseSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'expo-router';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface IExpence {
  id?: string;
  title?: string;
  date?: string;
  amount?: number;
}

const expenseSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  date: yup.string().required('Date is required'),
  amount: yup
    .number()
    .required('Amount is required')
    .typeError('Amount must be a number'),
});

const ExpenceForm = ({ id, amount, date, title }: IExpence) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(expenseSchema),
    defaultValues: {
      title: title ?? '',
      date: date ?? '',
      amount: amount ?? 0,
    },
  });

  const onPressSend = (formData: any) => {
    let input = {
      id: formData.id,
      title: formData.title,
      amount: Number(formData.amount),
      date: new Date(formData.date).toISOString(),
    };
    setTimeout(async () => {
      if (isEditing) {
        try {
          dispatch(editExpense(input));
          Alert.alert('Success', 'Expence updated successfully');
        } catch (e) {
          Alert.alert('Error', 'Something went wrong, please try again');
        }
      } else {
        try {
          dispatch(addExpense({ ...input, id: Math.random().toString() }));
          Alert.alert('Success', 'Expence added successfully');
        } catch (e) {
          Alert.alert('Error', 'Something went wrong, please try again');
        }
      }
      navigation.goBack();
    }, 2000);
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            label='Title'
            textInputConfig={{
              placeholder: 'Enter Title',
              autoCorrect: true,
              multiline: true,
              value: value.toString(),
              onChangeText: onChange,
              helperText: errors.title?.message,
              error: !!errors.title,
            }}
          />
        )}
        name='title'
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            label='Date'
            textInputConfig={{
              placeholder: 'YYYY-MM-DD',
              value: value.toString(),
              onChangeText: onChange,
              helperText: errors.date?.message,
              error: !!errors.date,
            }}
          />
        )}
        name='date'
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            label='Amount'
            textInputConfig={{
              placeholder: 'Enter Amount',
              keyboardType: 'numeric',
              value: value.toString(),
              onChangeText: onChange,
              helperText: errors.amount?.message,
              error: !!errors.amount,
            }}
          />
        )}
        name='amount'
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
            onPress={handleSubmit(onPressSend)}
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
