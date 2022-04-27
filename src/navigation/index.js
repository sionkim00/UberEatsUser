import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailScreen from "../screens/RestaurantDetailScreen";
import OrdersScreen from "../screens/OrdersScreen";
import DishDetailScreen from "../screens/DishDetailScreen";
import BasketScreen from "../screens/BasketScreen";
import OrderDetails from "../components/OrderDetails";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailScreen} />
      <HomeStack.Screen name="Dish" component={DishDetailScreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />
    </HomeStack.Navigator>
  );
}

const OrdersStack = createNativeStackNavigator();

function OrderStackNavigator() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="Order" component={OrderDetails} />
    </OrdersStack.Navigator>
  );
}
