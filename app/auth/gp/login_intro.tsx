// app/auth/gp/login_intro.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function GPLoginIntro() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Illustration with teal background */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/login-image.png")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>

      {/* White card overlay */}
      <View style={styles.card}>
        <Image
          source={require("../../../assets/images/medilink.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>Making Premium Healthcare Accessible</Text>
        <Text style={styles.join}>Join the Movement!</Text>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.primary}
          onPress={() => router.push("/auth/gp/login_form")}
        >
          <Text style={styles.primaryText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <TouchableOpacity
          onPress={() => router.push("/auth/gp/signup")}
          style={{ marginTop: 16 }}
        >
          <Text style={styles.signUp}>
            Don’t have an account? <Text style={styles.signUpBold}>Sign up!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006d77", // teal background
  },
  header: {
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: "80%",
    height: "80%",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  logo: {
    width: 180,
    height: 70,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#006d77",
    marginBottom: 6,
  },
  join: {
    fontSize: 14,
    color: "#333",
    marginBottom: 30,
  },
  primary: {
    backgroundColor: "#006d77",
    paddingVertical: 14,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 1,
  },
  signUp: {
    fontSize: 14,
    color: "#444",
  },
  signUpBold: {
    fontWeight: "700",
    color: "#006d77",
  },
});
