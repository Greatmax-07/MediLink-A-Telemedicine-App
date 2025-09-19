import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import PatientNavigator from "./PatientNavigator";
import DoctorNavigator from "./DoctorNavigator";
import GPNavigator from "./GPNavigator";
import PharmacistNavigator from "./PharmacistNavigator";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, role } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : role === "patient" ? (
        <Stack.Screen name="Patient" component={PatientNavigator} />
      ) : role === "doctor" ? (
        <Stack.Screen name="Doctor" component={DoctorNavigator} />
      ) : role === "gp" ? (
        <Stack.Screen name="GP" component={GPNavigator} />
      ) : (
        <Stack.Screen name="Pharmacist" component={PharmacistNavigator} />
      )}
    </Stack.Navigator>
  );
}
