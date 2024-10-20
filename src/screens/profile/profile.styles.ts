import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    backgroundColor: COLORS.white,
    flex: 1,
  },

  item: {
    borderBottomColor: COLORS.gray4,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingTop: 15,
    paddingBottom: 15,
  },

  title: {
    fontSize: FONT_SIZE.sm,
    marginBottom: 4,
    color: COLORS.gray3,
  },

  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
  },
});
