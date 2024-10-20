import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./home.style";
import { doctors } from "../../constants/data";
import { Doctor } from "../../components/doctor/doctor";
import icon from "../../constants/icon";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/route";

export const Home = () => {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigate = () => {
    navigate.navigate("Services");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende os seus serviços</Text>
      <FlatList
        data={doctors}
        keyExtractor={(doctor) => doctor.id_doctor.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Doctor
              func={handleNavigate}
              icon={item.icon === "M" ? icon.male : icon.female}
              name={item.name}
              specialty={item.specialty}
            />
          );
        }}
      />
    </View>
  );
};
