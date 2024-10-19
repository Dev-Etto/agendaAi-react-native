import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 50,
    justifyContent: "space-between",
  },

  containerLogo: {
    alignItems: "center",
  },

  logo: {
    width: 150,
    height: 35,
  },

  containerInput: {
    marginBottom: 15,
  },

  input: {
    backgroundColor: COLORS.gray5,
    padding: 20,
    borderRadius: 6,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  footerLink: {
    color: COLORS.blue,
  },
});
