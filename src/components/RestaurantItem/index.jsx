import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function RestaurantItem({ restaurant }) {
  const navigation = useNavigation();
  const handleItemPress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id });
  };
  return (
    <TouchableOpacity
      style={styles.restaurantContainer}
      onPress={handleItemPress}
    >
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subTitle}>
            ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}~
            {restaurant.maxDeliveryTime} min
          </Text>
        </View>

        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginBottom: 10,
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
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 5,
  },
});
