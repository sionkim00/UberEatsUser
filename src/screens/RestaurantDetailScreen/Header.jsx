import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

export default function Header({ restaurant }) {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: restaurant.image.startsWith("http")
            ? restaurant.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          ${restaurant.deliveryFee.toFixed(2)} &#8226;{" "}
          {restaurant.minDeliveryTime}~{restaurant.maxDeliveryTime} min
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
}
