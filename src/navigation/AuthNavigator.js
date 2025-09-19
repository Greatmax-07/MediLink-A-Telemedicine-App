import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

function SelectRoleScreen() {
  const { login } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Continue as:
      </Text>
      <Button title="Patient" onPress={() => login("patient")} />
      <Button title="General Practitioner" onPress={() => login("gp")} />
      <Button title="Doctor" onPress={() => login("doctor")} />
      <Button title="Pharmacist" onPress={() => login("pharmacist")} />
    </View>
  );
}

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SelectRole" component={SelectRoleScreen} />
    </Stack.Navigator>
  );
}
