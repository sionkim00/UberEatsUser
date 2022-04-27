import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import restaurants from "../../../assets/data/restaurants.json";

const dish = restaurants[0].dishes[0];

export default function DishDetailScreen() {
  const [quantity, setQuantity] = useState(0);

  const handleMinusClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };
  const getTotal = () => {
    return dish.price * quantity;
  };
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={50}
          color="black"
          onPress={handleMinusClick}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={50}
          color="black"
          onPress={handlePlusClick}
        />
      </View>

      <TouchableOpacity style={styles.button} disabled={!quantity}>
        <Text style={styles.buttonText}>
          Add {quantity} items to a cart (${getTotal().toFixed(2)})
        </Text>
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
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {},
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
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
});
