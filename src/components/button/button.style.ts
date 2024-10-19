import { ImageBackground, StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: COLORS.blue,
    padding: 12,
    borderRadius: 6,
  },

  text: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: FONT_SIZE.md,
  },
});
