import { View, Text, StyleSheet } from "react-native";

export default function doctor_kyc() {
  return (
    <View style={styles.container}>
      <Text>doctor - kyc screen</Text>
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
