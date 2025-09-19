// app/auth/gp/signup.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";

export default function GPSignup() {
  const router = useRouter();

  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [medicalLicenseId, setMedicalLicenseId] = useState("");
  const [hospital, setHospital] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required!");
      return;
    }

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save extra details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      role: "gp",  // so we know this is a doctor
      name,
      email,
      dob,
      phone,
      medicalLicenseId,
      hospital,
      specialization,
      experience,
      createdAt: new Date(),
    });

      Alert.alert("Success", "Account created successfully!");
      router.push("/auth/gp/home");
    } catch (error: any) {
      console.error(error);
      Alert.alert("Signup Error", error.message);
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
      <ScrollView
        style={styles.formWrapper}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>
          Already have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/auth/gp/login_form")}
          >
            Login
          </Text>
        </Text>

        {/* Name */}
        <View style={styles.inputWrapper}>
          <Ionicons name="person-outline" size={20} color="#555" />
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email */}
        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#555" />
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* DOB */}
        <View style={styles.inputWrapper}>
          <Ionicons name="calendar-outline" size={20} color="#555" />
          <TextInput
            placeholder="DD/MM/YYYY"
            style={styles.input}
            value={dob}
            onChangeText={setDob}
          />
        </View>

        {/* Phone */}
        <View style={styles.inputWrapper}>
          <Ionicons name="call-outline" size={20} color="#555" />
          <TextInput
            placeholder="(XXX) XXX-XXXX"
            style={styles.input}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
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

        {/* Medical License ID */}
        <View style={styles.inputWrapper}>
          <Ionicons name="document-text-outline" size={20} color="#555" />
          <TextInput
            placeholder="Medical License ID"
            style={styles.input}
            value={medicalLicenseId}
            onChangeText={setMedicalLicenseId}
          />
        </View>

        {/* Hospital */}
        <View style={styles.inputWrapper}>
          <Ionicons name="business-outline" size={20} color="#555" />
          <TextInput
            placeholder="Hospital / Clinic Name"
            style={styles.input}
            value={hospital}
            onChangeText={setHospital}
          />
        </View>

        {/* Specialization */}
        <View style={styles.inputWrapper}>
          <Ionicons name="medkit-outline" size={20} color="#555" />
          <TextInput
            placeholder="Specialization (e.g. General Medicine)"
            style={styles.input}
            value={specialization}
            onChangeText={setSpecialization}
          />
        </View>

        {/* Years of Experience */}
        <View style={styles.inputWrapper}>
          <Ionicons name="time-outline" size={20} color="#555" />
          <TextInput
            placeholder="Years of Experience"
            style={styles.input}
            keyboardType="numeric"
            value={experience}
            onChangeText={setExperience}
          />
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.registerBtn} onPress={handleSignup}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
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
  hero: { width: "80%", height: 200, marginBottom: -20 },
  formWrapper: { flex: 1, padding: 24 },
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
  },
  input: { flex: 1, marginLeft: 8, fontSize: 14 },
  registerBtn: {
    backgroundColor: "#006d77",
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  registerText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
