import React, { useState } from "react";
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // ✅ Make sure this is correctly pointing to your config file

export default function SubmitPage() {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!name.trim() || !stock.trim()) {
      Alert.alert("Validation Error", "Please fill all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "medicines"), {
        name: name.trim(),
        stock: parseInt(stock),
        timestamp: serverTimestamp() // ✅ Add timestamp here
      });

      Alert.alert("Success", "Medicine added!");
      setName("");
      setStock("");
      router.back();
    } catch (error) {
      console.error("Error adding medicine:", error);
      Alert.alert("Error", "Failed to add medicine.");
    }
  };

  return (
    <LinearGradient colors={["#e0f2fe", "#ede9fe", "#e0f2fe"]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Medicine</Text>
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Medicine Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Stock Quantity"
          value={stock}
          onChangeText={setStock}
          placeholderTextColor="#666"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>➕ Add</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { marginTop: 50, marginBottom: 30, alignItems: "center" },
  headerText: { fontSize: 24, fontWeight: "bold", color: "#1e3a8a" },
  card: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#60a5fa",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backdropFilter: "blur(14px)"
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
    shadowColor: "#3b82f6",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
