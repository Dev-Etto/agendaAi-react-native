import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginLeft: 15,
    marginBottom: 15,
  },
});
