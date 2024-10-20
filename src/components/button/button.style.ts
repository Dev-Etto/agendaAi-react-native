import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  btn: {
    width: "100%",
    padding: 12,
    borderRadius: 6,
  },

  primary: {
    backgroundColor: COLORS.blue,
  },

  danger: {
    backgroundColor: COLORS.red,
  },

  text: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: FONT_SIZE.md,
  },
});
