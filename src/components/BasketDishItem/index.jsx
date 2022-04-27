import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BasketDishItem({ basketDish }) {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>${basketDish.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
});
