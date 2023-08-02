import { ScrollView, View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import ButtonStack from "../components/ButtonStack";

const ApiUrl = "https://randomuser.me/api/?results=20";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const navigation = useNavigation();

  // fetch api
  useEffect(() => {
    getData();
  }, []);

  // header config
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true, // solo iOS
      headerTitle: "Home",
      headerRight: () => <ButtonStack />,
      headerSearchBarOptions: {
        placeholder: "Search",
        onChangeText: (event) => filterFriend(event.nativeEvent.text),
      },
    });
  }, [navigation]);

  //get data de la api
  async function getData() {
    try {
      const response = await fetch(ApiUrl);
      const data = await response.json();
      setData(data.results);
      setFiltered(data.results);
    } catch (e) {
      console.log(e);
    }
  }

  // filtar Friends
  const filterFriend = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.name.first
          ? item.name.first.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFiltered(newData);
    } else {
      setFiltered(data);
    }
  };

  return (
    <ScrollView>
      <Text style={styles.list}>Friends</Text>
      {filtered.map((item, index) => (
        <View key={index} style={styles.listFriend}>
          <Image source={{ uri: item.picture.large }} style={styles.img} />
          <View style={styles.container}>
            <Text style={styles.txtName}>
              {item.name.first} {item.name.last}
            </Text>
            <Text style={styles.email}>@{item.login.username}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  list: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  listFriend: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  container: {
    flexDirection: "column",
    alignItems: "left",
    marginLeft: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  txtName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#353535",
  },
});
