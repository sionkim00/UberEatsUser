import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";

export default function OrdersScreen() {
  return (
    <View style={{ flex: 1, width: "100%", paddingTop: 50 }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
