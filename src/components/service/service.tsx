import { Text, View } from "react-native";
import { Button } from "../button/button";
import { styles } from "./service.style";
import React from "react";

interface IServiceProps {
  description: string;
  price: number;
}

export const Service = ({ description, price }: IServiceProps) => {
  return (
    <View style={styles.service}>
      <View style={styles.containerText}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
      </View>

      <View style={styles.containerButton}>
        <Button text="Agendar" theme="primary" />
      </View>
    </View>
  );
};
