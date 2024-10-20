import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  service: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    padding: 12,
    borderColor: COLORS.gray4,
    flexDirection: "row",
  },

  description: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray3,
    marginTop: 5,
  },

  price: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.blue,
    marginTop: 3,
  },

  containerText: {
    flex: 1,
  },

  containerButton: {
    marginTop: 5,
  },
});
