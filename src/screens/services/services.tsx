import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./services.style";
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import { Service } from "../../components/service/service";

export const Services = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={icon.female} />
        <Text style={styles.name}>Heber</Text>
        <Text style={styles.specialty}>Cardiologista</Text>
      </View>

      <Text style={styles.title}>Agende os seus serviços</Text>
      <FlatList
        data={doctors_services}
        keyExtractor={(service) => service.id_service.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Service price={item.price} description={item.description} />;
        }}
      />
    </View>
  );
};
