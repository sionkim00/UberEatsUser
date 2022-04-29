import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";

export default function RestaurantDetailScreen() {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    if (!id) return;
    DataStore.query(Restaurant, id).then((result) => setRestaurant(result));
    DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(
      (result) => setDishes(result)
    );
  }, [id]);

  if (!restaurant) {
    return <ActivityIndicator size="large" color="black" />;
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
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
