// app/auth/patient/booking/confirm.tsx
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Confirm() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../../../../assets/doctor.png")} style={styles.image} />

      <Text style={styles.name}>Dr. Helena Fox</Text>
      <Text style={styles.specialization}>General Practitioner</Text>

      <View style={styles.slotBox}>
        <Text style={styles.slotText}>Thu, 17 Oct 2024 at 16:00 - 16:30 PM</Text>
        <Text style={styles.slotSub}>Video Consultation time</Text>
        <Text style={styles.slotSub}>Starts in 5 days, 7 hours, 19 minutes</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/auth/patient/home")}>
        <Text style={styles.buttonText}>Confirm Appointment</Text>
      </TouchableOpacity>
      <Text style={styles.note}>Note: Appointment once confirmed can’t be changed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 20, fontWeight: "700" },
  specialization: { fontSize: 14, color: "#666", marginBottom: 20 },
  slotBox: { backgroundColor: "#f0f9f8", padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 20 },
  slotText: { fontSize: 16, fontWeight: "600" },
  slotSub: { fontSize: 14, color: "#555" },
  button: { backgroundColor: "#006d77", paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  note: { fontSize: 12, color: "#999", marginTop: 10, textAlign: "center" },
});
