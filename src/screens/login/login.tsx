import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/button/button";
import { styles } from "./login.styles";
import icon from "../../constants/icon";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/route";
import { useState } from "react";
import React from "react";

export const Login = () => {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const [inputData, setInputData] = useState<{
    login: string;
    password: string;
  }>({
    login: "",
    password: "",
  });

  const userFake = {
    login: "conta@teste.com",
    password: "1234",
  };

  const handleUserVerify = () => {
    if (
      inputData.login === userFake.login &&
      inputData.password === userFake.password
    ) {
      navigate.navigate("Main");
    } else {
      alert("Login ou senha incorretos");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>

      <View>
        <View style={styles.containerInput}>
          <TextInput
            value={inputData.login}
            onChangeText={(text) => setInputData({ ...inputData, login: text })}
            style={styles.input}
            placeholder="E-email"
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={inputData.password}
            onChangeText={(text) =>
              setInputData({ ...inputData, password: text })
            }
            placeholder="Senha"
            secureTextEntry={true}
          />
        </View>

        <Button theme="primary" func={handleUserVerify} text="Acessar" />
      </View>

      <View style={styles.footer}>
        <Text>Não tenho conta. </Text>
        <TouchableOpacity onPress={() => navigate.navigate("Account")}>
          <Text style={styles.footerLink}>criar conta agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
