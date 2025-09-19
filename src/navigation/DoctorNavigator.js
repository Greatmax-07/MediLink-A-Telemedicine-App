import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import DoctorHomeScreen from "../screens/Doctor/DoctorHomeScreen";

const Tab = createBottomTabNavigator();

export default function DoctorNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="DoctorHome"
        component={DoctorHomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medkit" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
