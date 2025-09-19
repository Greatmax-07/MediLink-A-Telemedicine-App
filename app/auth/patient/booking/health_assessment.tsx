import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function HealthAssessment() {
  const router = useRouter();
  const [bloodType, setBloodType] = useState<string | null>(null);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [symptoms, setSymptoms] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Health Assessment</Text>
      <Text style={styles.subtitle}>
        Providing this data helps the doctor customize your treatment and ensure precise care.
      </Text>

      {/* Blood Group */}
      <Text style={styles.label}>Blood Group</Text>
      <View style={styles.bloodGroupRow}>
        {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
          <TouchableOpacity
            key={bg}
            style={[
              styles.bloodGroupCircle,
              bloodType === bg && styles.activeCircle,
            ]}
            onPress={() => setBloodType(bg)}
          >
            <Text
              style={[
                styles.bloodGroupText,
                bloodType === bg && styles.activeText,
              ]}
            >
              {bg}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Allergies */}
      <Text style={styles.label}>Allergies</Text>
      <Text style={styles.value}>Peanuts</Text>

      {/* Symptoms */}
      <Text style={styles.label}>Symptoms</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your symptoms"
        value={symptoms}
        onChangeText={setSymptoms}
        multiline
      />

      {/* Height & Weight */}
      <Text style={styles.label}>Height & Weight</Text>
      <View style={styles.row}>
        <TextInput
          placeholder="Height (cm)"
          style={[styles.input, { flex: 1, marginRight: 5 }]}
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Weight (kg)"
          style={[styles.input, { flex: 1, marginLeft: 5 }]}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
      </View>

      {/* Blood Pressure */}
      <Text style={styles.label}>Blood Pressure (mmHg)</Text>
      <Text style={styles.value}>120 / 80</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/patient/booking/slots")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "600", marginTop: 15, marginBottom: 5 },
  value: { fontSize: 14, color: "#333", marginTop: 5, marginBottom: 10 },

  // Blood group styling
  bloodGroupRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  bloodGroupCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    backgroundColor: "#f8f8f8",
  },
  bloodGroupText: { fontSize: 16, fontWeight: "600", color: "#333" },
  activeCircle: { backgroundColor: "#006d77", borderColor: "#006d77" },
  activeText: { color: "#fff", fontWeight: "700" },

  // Input fields
  row: { flexDirection: "row", width: "100%", marginBottom: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fff",
    marginBottom: 10,
  },

  // Button
  button: {
    marginTop: 30,
    backgroundColor: "#006d77",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
