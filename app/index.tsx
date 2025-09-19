// app/index.tsx
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function SelectCategoryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#006d77" />

      {/* Header with teal bg and white curve */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/login-image.png")}
          style={styles.hero}
          resizeMode="contain"
        />
        <View style={styles.curvedWhite} />
      </View>

      {/* Category options */}
      <View style={styles.content}>
        <Text style={styles.title}>Select Category</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/patient/login_intro")}
        >
          <Text style={styles.buttonText}>PATIENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/gp/login_intro")}
        >
          <Text style={styles.buttonText}>GENERAL PRACTITIONER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/doctor/login_intro")}
        >
          <Text style={styles.buttonText}>SPECIALIZED DOCTOR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/pharmacist/login_intro")}
        >
          <Text style={styles.buttonText}>PHARMACIST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    width: "100%",
    height: 280,
    backgroundColor: "#006d77",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  curvedWhite: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  hero: {
    width: "80%",
    height: 240,
    marginBottom: -30,
  },
  content: { flex: 1, alignItems: "center", paddingTop: 30 },
  title: { fontSize: 24, fontWeight: "700", color: "#2A2A72", marginBottom: 30 },
  button: {
    backgroundColor: "#006d77",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 18,
    elevation: 2,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
