// app/auth/gp/assessment.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Assessment() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Shreya Ghoshal's Health Assessment</Text>

      {/* Blood Group */}
      <Text style={styles.label}>Blood Type:</Text>
      <View style={styles.bloodRow}>
        <View style={[styles.bloodOption, styles.selected]}>
          <Text style={styles.bloodText}>B (RH+)</Text>
        </View>
      </View>

      {/* Allergies */}
      <Text style={styles.label}>Allergies</Text>
      <Text style={styles.value}>Peanuts</Text>

      {/* Symptoms */}
      <Text style={styles.label}>Symptoms</Text>
      <Text style={styles.value}>Migraines, Nausea, Breathlessness</Text>

      {/* Height and Weight side-by-side */}
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>Height (cm)</Text>
          <Text style={styles.value}>172</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Weight (kg)</Text>
          <Text style={styles.value}>85</Text>
        </View>
      </View>

      {/* Blood Pressure */}
      <Text style={styles.label}>Blood Pressure (mmHg)</Text>
      <Text style={styles.value}>120 / 80</Text>

      {/* Action Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/gp/consultation")}
      >
        <Text style={styles.buttonText}>Start Consultation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/gp/prescription")}
      >
        <Text style={styles.buttonText}>Write Prescription</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/gp/referral_note")}
      >
        <Text style={styles.buttonText}>Write Referral Note</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 20 },
  label: { fontSize: 14, color: "#555", marginTop: 12 },
  value: { fontSize: 16, fontWeight: "500", color: "#111", marginTop: 4 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 40, // extra spacing between height & weight
  },
  col: { flex: 1 },
  bloodRow: { flexDirection: "row", marginTop: 6 },
  bloodOption: {
    borderWidth: 1,
    borderColor: "#006d77",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },
  selected: { backgroundColor: "#006d77" },
  bloodText: { color: "#fff", fontWeight: "600" },
  button: {
    backgroundColor: "#006d77",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
