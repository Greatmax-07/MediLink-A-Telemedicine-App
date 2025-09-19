import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function ReferralNote() {
  const router = useRouter();
  const [note, setNote] = useState("");

  // Example attached report (pulled from assessment)
  const report = {
    name: "Shreya Ghoshal",
    blood: "B (III), Rh+",
    allergies: "Peanuts",
    symptoms: "Migraines, Nausea, Breathlessness",
    height: "172 cm",
    weight: "85 kg",
    bp: "120 / 80",
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Write Referral Note</Text>
      <Text style={styles.subtitle}>Patient Report will be automatically included</Text>

      {/* Referral Note Input */}
      <TextInput
        style={styles.input}
        placeholder="Write your referral note here..."
        value={note}
        onChangeText={setNote}
        multiline
      />

      {/* Attached Report */}
      <View style={styles.reportBox}>
        <Text style={styles.reportTitle}>Attached Patient Report</Text>
        <Text style={styles.reportText}>Name: {report.name}</Text>
        <Text style={styles.reportText}>Blood Type: {report.blood}</Text>
        <Text style={styles.reportText}>Allergies: {report.allergies}</Text>
        <Text style={styles.reportText}>Symptoms: {report.symptoms}</Text>
        <Text style={styles.reportText}>Height: {report.height}</Text>
        <Text style={styles.reportText}>Weight: {report.weight}</Text>
        <Text style={styles.reportText}>Blood Pressure: {report.bp}</Text>
      </View>

      {/* Submit */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // For now just go back home
          router.push("/auth/gp/home");
        }}
      >
        <Text style={styles.buttonText}>Send Referral Note</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 10, color: "#006d77" },
  subtitle: { fontSize: 14, color: "gray", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    minHeight: 120,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  reportBox: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  reportTitle: { fontWeight: "700", fontSize: 16, marginBottom: 8 },
  reportText: { fontSize: 14, marginBottom: 4, color: "#333" },
  button: {
    backgroundColor: "#006d77",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
