import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, TextInput } from 'react-native';
import { View } from '@/components/Themed';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { DUMMY_EXPENSES } from '@/data/data';

import dayjs from 'dayjs';
import { formatDate } from '@/utils/date';

export default function ModalScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { id, title, date, amount } = params;
  const isEditing = !!title;
  const [expense, setExpence] = useState({
    title: title,
    date: formatDate(date ?? new Date()),
    amount: amount,
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

  const deleteExpence = () => {
    setTimeout(async () => {
      DUMMY_EXPENSES.filter((expense) => expense.id !== id);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* <PrimaryButton onPress={() => {}}>ADD</PrimaryButton> */}
      <View>
        <>
          {/* <Text style={styles.title}>Title: {title}</Text>
            <Text style={styles.title}>Date: {date}</Text>
            <Text style={styles.title}>Amount: {amount}</Text>
            <PrimaryButton onPress={deleteExpence}>Delete</PrimaryButton> */}
          <View style={styles.inputWrapper}>
            <Text style={styles.title}>Title:</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter Title'
              value={expense?.title ?? ''}
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
        </>
      </View>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <View>
        <PrimaryButton onPress={() => {}} color='primary'>
          {isEditing ? 'Save Changes' : 'Add Expence'}
        </PrimaryButton>
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
    width: '80%',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,

    paddingHorizontal: 15,

    borderRadius: 50,
  },
  inputWrapper: {
    marginBottom: 20,
    // flexDirection: 'row',
    // alignItems: 'center',
    gap: 10,
  },
});
