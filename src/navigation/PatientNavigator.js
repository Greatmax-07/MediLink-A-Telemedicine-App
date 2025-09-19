import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PatientHomeScreen from "../screens/Patient/PatientHomeScreen";

const Tab = createBottomTabNavigator();

export default function PatientNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={PatientHomeScreen} />
    </Tab.Navigator>
  );
}
