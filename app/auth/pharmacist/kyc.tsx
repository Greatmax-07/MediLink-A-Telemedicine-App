import { View, Text, StyleSheet } from "react-native";

export default function pharmacist_kyc() {
  return (
    <View style={styles.container}>
      <Text>pharmacist - kyc screen</Text>
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
