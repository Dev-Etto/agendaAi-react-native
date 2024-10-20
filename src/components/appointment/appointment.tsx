import { Image, Text, View } from "react-native";
import { styles } from "./appointment.style";
import icon from "../../constants/icon";
import { Button } from "../button/button";
import React from "react";

interface IAppointments {
  service: string;
  doctor: string;
  specialty: string;
}

export const Appointments = ({ service, doctor, specialty }: IAppointments) => {
  return (
    <View style={styles.appointment}>
      <Text style={styles.name}>
        {service} - {doctor}
      </Text>
      <Text style={styles.specialty}>{specialty}</Text>

      <View style={styles.container}>
        <View style={styles.containerBooking}>
          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.calender} />
            <Text style={styles.bookingDate}>15/10/2024</Text>
          </View>
          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.clock} />
            <Text style={styles.clock}>08:33h</Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <Button theme="danger" text="Cancelar reserva" />
        </View>
      </View>
    </View>
  );
};
