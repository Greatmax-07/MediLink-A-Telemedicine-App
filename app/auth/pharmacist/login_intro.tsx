import { View, Text, StyleSheet } from "react-native";

export default function pharmacist_login_intro() {
  return (
    <View style={styles.container}>
      <Text>pharmacist - login_intro screen</Text>
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
