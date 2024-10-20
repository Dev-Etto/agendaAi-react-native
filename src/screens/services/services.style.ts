import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  banner: {
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 25,
  },

  title: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginLeft: 15,
    marginBottom: 15,
  },

  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.white,
    fontWeight: "bold",
    marginTop: 5,
  },

  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.white,
    marginTop: 3,
  },
});
