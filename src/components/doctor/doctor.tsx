import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "./doctor.style";

interface IDoctorProps {
  name: string;
  specialty: string;
  icon: ImageSourcePropType;
  func: () => void;
}

export const Doctor = ({ name, specialty, icon, func }: IDoctorProps) => {
  return (
    <TouchableOpacity onPress={func} style={styles.doctor}>
      <Image source={icon} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>
    </TouchableOpacity>
  );
};
