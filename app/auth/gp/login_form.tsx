// app/auth/gp/login_form.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig"; // your firebase config in project root

export default function GPLoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      // on success, go to GP home as requested
      router.replace("/auth/gp/home");
    } catch (err: any) {
      console.error("Login error:", err);
      Alert.alert("Login failed", err?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with teal background */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/login-image.png")}
          style={styles.hero}
          resizeMode="contain"
        />
        <View style={styles.curvedWhite} />
      </View>

      {/* Form Section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.formContainer}
      >
        <Text style={styles.title}>Sign in to your Account</Text>
        <Text style={styles.subtitle}>
          Don’t have an account?{" "}
          <Text style={styles.link} onPress={() => router.push("/auth/gp/signup")}>
            Sign Up
          </Text>
        </Text>

        {/* Email */}
        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#555" />
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color="#555" />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Forgot Password (keeps the existing UI; change route later if needed) */}
        <TouchableOpacity style={styles.forgotWrapper} onPress={() => router.push("/auth/gp/forgot-password")}>
          <Text style={styles.forgot}>Forgot Your Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginText}>Log In</Text>}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    width: "100%",
    height: 250,
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
    height: 200,
    marginBottom: -20,
  },

  formContainer: { flex: 1, padding: 24, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "700", color: "#000", marginBottom: 6 },
  subtitle: { fontSize: 14, color: "#444", marginBottom: 20 },
  link: { color: "#006d77", fontWeight: "600" },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    width: "100%",
  },
  input: { flex: 1, marginLeft: 8, fontSize: 14 },

  forgotWrapper: { alignSelf: "flex-end", marginBottom: 20 },
  forgot: { color: "#006d77", fontSize: 13, fontWeight: "500" },

  loginBtn: {
    backgroundColor: "#006d77",
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  loginText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
