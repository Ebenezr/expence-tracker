import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

interface IExpence {
  expense?: {
    id: string;
    title: string;
    date: string;
    amount: string;
  };
  label: string;
  textInputConfig?: {
    placeholder: string;
    value?: string;
    keyboardType?:
      | 'default'
      | 'number-pad'
      | 'numeric'
      | 'decimal-pad'
      | 'email-address'
      | 'phone-pad';
    maxLength?: number;
    onChangeText?: (text: string) => void;
    autoCorrect?: boolean;
    multiline?: boolean;
  };
}

const Input = ({ label, textInputConfig }: IExpence) => {
  let inputStyles = [styles.input];
  if (textInputConfig?.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.title}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  inputWrapper: {
    marginBottom: 20,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 15,
    borderRadius: 8,
    paddingVertical: 10,
  },
});
