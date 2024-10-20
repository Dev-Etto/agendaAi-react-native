import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./calendar.style";
import { appointments } from "../../constants/data";
import { Appointments } from "../../components/appointment/appointment";

export const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende os seus serviços</Text>
      <FlatList
        data={appointments}
        keyExtractor={(app) => app.id_appointment.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Appointments
              doctor={item.doctor}
              service={item.service}
              specialty={item.specialty}
            />
          );
        }}
      />
    </View>
  );
};
