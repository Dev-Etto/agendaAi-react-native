import { Text, View } from "react-native";
import { calendarTheme, styles } from "./schedule.style";
import { Calendar, LocaleConfig, DateData } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import React, { useState } from "react";
import { Button } from "../../components/button/button";
import { Picker } from "@react-native-picker/picker";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export const Schedule = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [selectedDay, setSelectedDay] = useState<string>(today);
  const [selectedHour, setSelectedHour] = useState<string>("09:30");
  return (
    <View style={styles.container}>
      <View>
        <Calendar
          onDayPress={(day: DateData) => {
            setSelectedDay(day.dateString);
          }}
          theme={calendarTheme}
          markedDates={{
            [selectedDay]: { selected: true },
          }}
          minDate={today}
        />

        <View>
          <Text style={styles.textHour}>Horário</Text>
        </View>
        <View>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(value) => {
              setSelectedHour(value);
            }}
          >
            <Picker.Item label="09:00" value="09:00" />
            <Picker.Item label="09:30" value="09:30" />
            <Picker.Item label="10:00" value="10:00" />
          </Picker>
        </View>
      </View>

      <View>
        <Button text="Confirmar Reserva" theme="primary" />
      </View>
    </View>
  );
};
