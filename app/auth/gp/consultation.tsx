import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function GPConsultation() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.status}>Scheduled</Text>
      <Text style={styles.info}>
        Consultation with Dr. Helena Fox {"\n"} 16:00 PM - Ms. Shreya Ghoshal
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Join Call</Text>
      </TouchableOpacity>

      <View style={styles.past}>
        <Text style={styles.pastText}>Past Consultations</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  status: {
    backgroundColor: "#e0f2f1",
    color: "#006d77",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 40,
    fontWeight: "600",
  },
  info: { fontSize: 16, textAlign: "center", marginVertical: 30 },
  button: {
    backgroundColor: "#006d77",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  past: { marginTop: 40, backgroundColor: "#f1f1f1", padding: 10, borderRadius: 20 },
  pastText: { color: "#555", fontWeight: "600" },
});
