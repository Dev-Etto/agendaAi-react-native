import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";
import React from "react";

interface IButton {
  text: string;
  theme: "primary" | "danger";
  func?: () => void;
}

export const Button = ({ text, func, theme }: IButton) => {
  return (
    <TouchableOpacity style={[styles.btn, styles[theme]]} onPress={func}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
