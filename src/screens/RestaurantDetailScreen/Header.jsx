import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";

export default function Header({ restaurant }) {
  return (
    <View>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}~
          {restaurant.maxDeliveryTime} min
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
}
