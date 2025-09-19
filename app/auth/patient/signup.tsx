import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function PatientSignup() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/login-image.png")}
        style={styles.headerImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>Create account</Text>

      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="DD/MM/YYYY" style={styles.input} />
      <TextInput placeholder="Phone" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/patient/kyc")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/auth/patient/login_form")}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  headerImage: { width: "100%", height: 200 },
  title: { fontSize: 22, fontWeight: "700", marginVertical: 20 },
  input: {
    width: "90%", borderWidth: 1, borderColor: "#ccc", borderRadius: 10,
    padding: 12, marginBottom: 15,
  },
  button: { backgroundColor: "#006d77", paddingVertical: 15, paddingHorizontal: 80, borderRadius: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  footer: { marginTop: 20, fontSize: 14, color: "#444" },
  link: { color: "#006d77", fontWeight: "600" },
});
