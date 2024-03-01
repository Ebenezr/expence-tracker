import { Pressable, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconButtonProps {
  icon: string;
  onPress?: () => void;
  color: string;
  size?: number;
}

const IconButton = ({ icon, onPress, color, size = 24 }: IconButtonProps) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => pressed && styles.pressed}
  >
    <MaterialIcons name={icon} size={size} color={color} />
  </Pressable>
);

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
