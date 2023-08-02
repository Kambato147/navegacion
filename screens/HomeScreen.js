import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import ButtonStack from "../components/ButtonStack";


export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home',
      headerRight: () => <ButtonStack />
    })
  },[navigation])

  return (
    <View style={styles.container}>
       <Text>¡Bienvenido a la pantalla de inicio!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
