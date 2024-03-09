import { Pressable, StyleSheet, Text, View } from 'react-native';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
  const { onPress } = props;
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={onPress}
        android_ripple={{ color: '#A0567A' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: '#A0567A',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
