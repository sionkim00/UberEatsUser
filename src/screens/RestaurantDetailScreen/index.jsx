import { View, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";

const restaurant = restaurants[0];

export default function RestaurantDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const id = route.params?.id;

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
