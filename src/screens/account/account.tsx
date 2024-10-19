import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/button/button";
import { styles } from "./account.style";
import icon from "../../constants/icon";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/route";

export const Account = () => {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>

      <View>
        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder="Nome" />
        </View>
        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder="E-email" />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />
        </View>
        <Button text="Criar Conta" />
      </View>

      <View style={styles.footer}>
        <Text>Já tenho conta. </Text>
        <TouchableOpacity onPress={() => navigate.navigate("Login")}>
          <Text style={styles.footerLink}>Fazer login.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
