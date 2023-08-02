import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ButtonStack = () => {
  const navigation = useNavigation();

  // navegacion del stack
  const goToStack = () => {
    navigation.navigate("settngStack");
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={goToStack}>
      <Text style={styles.txt}>+</Text>
    </TouchableOpacity>
  );
};

export default ButtonStack;

const styles = StyleSheet.create({
  btn: {
    width: 30,
    height: 30,
    backgroundColor: "#232323",
    borderRadius: 8,
    right: 10,
  },
  txt: {
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
});
