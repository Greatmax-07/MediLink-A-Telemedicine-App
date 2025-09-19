import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function WritePrescription() {
  const router = useRouter();
  const [medicines, setMedicines] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Prescription</Text>
      <Text style={styles.subtitle}>Fill in details for the patient</Text>

      {/* Medicines */}
      <Text style={styles.label}>Medicines</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter medicines (comma separated)"
        value={medicines}
        onChangeText={setMedicines}
        multiline
      />

      {/* Pharmacy Suggestion */}
      <Text style={styles.label}>Nearest Pharmacy</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter pharmacy name / location"
        value={pharmacy}
        onChangeText={setPharmacy}
      />

      {/* Notes */}
      <Text style={styles.label}>Doctor's Notes</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Enter notes for patient"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      {/* Save + Send */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Later: save to Firestore & attach to patient record
          router.push("/auth/gp/home");
        }}
      >
        <Ionicons name="save-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Save & Send to Patient</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 8, color: "#006d77" },
  subtitle: { fontSize: 14, color: "#555", marginBottom: 20 },

  label: { fontSize: 16, fontWeight: "600", marginTop: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    backgroundColor: "#f9f9f9",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006d77",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 10,
  },
});
