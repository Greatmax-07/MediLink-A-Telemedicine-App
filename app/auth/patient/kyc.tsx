import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function PatientKYC() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../../assets/images/login-image.png")}
        style={styles.headerImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>KYC Details</Text>

      <TextInput placeholder="Full Address" style={styles.input} />
      <TextInput placeholder="City" style={styles.input} />
      <TextInput placeholder="State" style={styles.input} />
      <TextInput placeholder="Zip Code" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Emergency Contact" style={styles.input} keyboardType="phone-pad" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/patient/home")}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  headerImage: { width: "100%", height: 200 },
  title: { fontSize: 22, fontWeight: "700", marginVertical: 20 },
  input: {
    width: "90%", borderWidth: 1, borderColor: "#ccc", borderRadius: 10,
    padding: 12, marginBottom: 15,
  },
  button: { backgroundColor: "#006d77", paddingVertical: 15, paddingHorizontal: 80, borderRadius: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
