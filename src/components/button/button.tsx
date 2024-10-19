import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

interface IButton {
  text: string;
  func?: () => void;
}

export const Button = ({ text, func }: IButton) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={func}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
