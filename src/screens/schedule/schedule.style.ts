import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  textHour: {
    fontSize: FONT_SIZE.lg,
    marginTop: 20,
    fontWeight: "bold",
    color: COLORS.gray2,
  },
});

export const calendarTheme = {
  todayTextColor: COLORS.red,
  selectedDayBackgroundColor: COLORS.blue,
  selectedDayTextColor: COLORS.white,
  arrowColor: COLORS.red,
};
