import { View, Text, StyleSheet } from "react-native";

export default function doctor_signup() {
  return (
    <View style={styles.container}>
      <Text>doctor - signup screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
