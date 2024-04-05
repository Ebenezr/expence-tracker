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
  color:
    | 'text'
    | 'background'
    | 'tint'
    | 'tabIconDefault'
    | 'tabIconSelected'
    | 'accent'
    | 'error'
    | 'gray'
    | 'whiteSmoke';
  variant: 'contained' | 'outlined';
}

const PrimaryButton = ({
  children,
  color,
  variant,
  ...props
}: PrimaryButtonProps) => {
  const scheme = useColorScheme();
  const { onPress } = props;
  const buttonColor = Colors[scheme ?? 'dark'][color];
  const isOutlined = variant === 'outlined';

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
          isOutlined
            ? {
                borderColor: buttonColor,
                borderWidth: 1,
                backgroundColor: 'transparent',
              }
            : { backgroundColor: buttonColor },
        ]}
        onPress={onPress}
        android_ripple={{ color: '#A0567A' }}
      >
        <Text
          style={[
            styles.buttonText,
            isOutlined ? { color: buttonColor } : { color: 'white' },
          ]}
        >
          {children}
        </Text>
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
