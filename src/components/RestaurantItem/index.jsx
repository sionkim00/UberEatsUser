import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function RestaurantItem({ restaurant }) {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subTitle}>
        ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}~
        {restaurant.maxDeliveryTime} minutes
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subTitle: {
    color: "grey",
  },
});
