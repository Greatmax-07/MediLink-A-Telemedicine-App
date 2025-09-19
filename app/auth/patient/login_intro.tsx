import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function PatientLoginIntro() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#006d77" />

      <View style={styles.header}>
        <View style={styles.curvedWhite} />
        <Image
          source={require("../../../assets/images/medilink.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome Patient</Text>
        <Text style={styles.subtitle}>Login or sign up to continue with MediLink</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/patient/login_form")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={() => router.push("/auth/patient/signup")}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={() => router.push("/auth/patient/phone_login")}
        >
          <Text style={styles.buttonText}>LOGIN WITH PHONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    width: "100%", height: 280, backgroundColor: "#006d77",
    alignItems: "center", justifyContent: "flex-end",
  },
  curvedWhite: {
    position: "absolute", bottom: 0, width: "100%", height: 80,
    backgroundColor: "#fff", borderTopLeftRadius: 100, borderTopRightRadius: 100,
  },
  logo: { position: "absolute", bottom: -30, width: "70%", height: 160 },
  content: { flex: 1, alignItems: "center", paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 26, fontWeight: "700", color: "#2A2A72", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 40, textAlign: "center" },
  button: {
    backgroundColor: "#006d77", width: "80%", paddingVertical: 15,
    borderRadius: 12, alignItems: "center", marginBottom: 20,
  },
  signupButton: { backgroundColor: "#83c5be" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600", letterSpacing: 1 },
});
