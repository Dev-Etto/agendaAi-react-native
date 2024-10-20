import { Text, View } from "react-native";
import { styles } from "./profile.styles";
import React from "react";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>João Neto</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.text}>email@email.com</Text>
      </View>
    </View>
  );
};
