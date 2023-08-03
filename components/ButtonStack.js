import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const ButtonStack = () => {
  const navigation = useNavigation();

  // navegacion del stack
  const goToStack = () => {
    navigation.navigate("settngStack");
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={goToStack}>
      <FontAwesome name="gear" color="#232323" size={30} />
    </TouchableOpacity>
  );
};

export default ButtonStack;

const styles = StyleSheet.create({
  btn: {
    width: 30,
    height: 30,
    borderRadius: 8,
    right: 14,
  },
});
