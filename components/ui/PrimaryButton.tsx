import Colors from '@/constants/Colors';
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
  const scheme = useColorScheme();
  const { onPress } = props;
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.button,
                styles.pressed,
                {
                  ...styles.button,
                  backgroundColor: Colors[scheme ?? 'dark'].accent,
                },
              ]
            : styles.button
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
