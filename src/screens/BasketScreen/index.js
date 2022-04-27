import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";

const restaurant = restaurants[0];

export default function BasketScreen() {
  const [quantity, setQuantity] = useState(0);

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.subTitle}>Your items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View style={styles.separator} />

      <TouchableOpacity style={styles.button} disabled={!quantity}>
        <Text style={styles.buttonText}>Create Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantity: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginRight: 10,
  },
});
