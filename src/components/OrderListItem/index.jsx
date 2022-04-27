import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function OrderListItem({ order }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
      onPress={() => navigation.navigate("Order", { id: order.id })}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, aspectRatio: 1, marginRight: 10 }}
      />

      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
