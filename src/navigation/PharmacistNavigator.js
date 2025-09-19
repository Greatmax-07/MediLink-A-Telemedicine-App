import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PharmacistHomeScreen from "../screens/Pharmacist/PharmacistHomeScreen";

const Tab = createBottomTabNavigator();

export default function PharmacistNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="PharmacistHome"
        component={PharmacistHomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="business" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
