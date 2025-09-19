import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DoctorProfile() {
  const [selectedDate, setSelectedDate] = useState<number | null>(17);
  const [selectedTime, setSelectedTime] = useState<string | null>("16:00");

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const times = ["10:00", "10:30", "12:00", "12:30", "15:30", "16:00", "16:30", "17:00"];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Ionicons name="share-outline" size={22} color="black" />
          <Ionicons name="heart-outline" size={22} color="black" />
        </View>
      </View>

      {/* Doctor Info */}
      <View style={styles.doctorCard}>
        <Image
          source={require("../../assets/doctor.png")} // replace with your doctor image
          style={styles.doctorImage}
        />
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={styles.doctorName}>Dr. Helena Fox</Text>
          <Text style={styles.speciality}>Radiologist</Text>
          <Text style={styles.doctorId}>⭐ 4.8   |   ID: 3958648</Text>
        </View>
      </View>

      {/* Tabs (simplified mockup) */}
      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Book</Text>
        <Text style={styles.tabText}>About</Text>
        <Text style={styles.tabText}>Reviews</Text>
      </View>

      {/* Fees */}
      <View style={styles.fees}>
        <Text style={styles.feesText}>Consultation Fees</Text>
        <Text style={styles.feesAmount}>₹399/-</Text>
        <Text style={styles.feesNote}>30 minutes consultation</Text>
      </View>

      {/* Available Slots */}
      <Text style={styles.sectionTitle}>Available Slots</Text>
      <Text style={styles.subText}>October 2024</Text>

      <View style={styles.datesGrid}>
        {dates.map((d) => (
          <TouchableOpacity
            key={d}
            style={[
              styles.dateCircle,
              selectedDate === d && styles.selectedDateCircle,
            ]}
            onPress={() => setSelectedDate(d)}
          >
            <Text
              style={[
                styles.dateText,
                selectedDate === d && styles.selectedDateText,
              ]}
            >
              {d}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Time Slots */}
      <Text style={styles.sectionTitle}>Select time</Text>
      <View style={styles.timeGrid}>
        {times.map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.timeSlot, selectedTime === t && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime(t)}
          >
            <Text
              style={[styles.timeText, selectedTime === t && styles.selectedTimeText]}
            >
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Book Button */}
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookBtnText}>Book appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  doctorCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  doctorName: { fontSize: 20, fontWeight: "bold" },
  speciality: { fontSize: 16, color: "#666" },
  doctorId: { fontSize: 14, color: "#888", marginTop: 4 },
  tabs: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  tabText: { fontSize: 16, color: "#888" },
  activeTab: { color: "#006d6d", fontWeight: "bold" },
  fees: { marginBottom: 20 },
  feesText: { fontSize: 16, fontWeight: "600" },
  feesAmount: { fontSize: 18, fontWeight: "bold", marginVertical: 4 },
  feesNote: { fontSize: 14, color: "#666" },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginVertical: 10 },
  subText: { fontSize: 14, color: "#888", marginBottom: 10 },
  datesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  dateCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDateCircle: { backgroundColor: "#006d6d", borderColor: "#006d6d" },
  dateText: { fontSize: 14, color: "#333" },
  selectedDateText: { color: "#fff", fontWeight: "bold" },
  timeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 30,
  },
  timeSlot: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectedTimeSlot: {
    backgroundColor: "#006d6d",
    borderColor: "#006d6d",
  },
  timeText: { fontSize: 14, color: "#333" },
  selectedTimeText: { color: "#fff", fontWeight: "bold" },
  bookBtn: {
    backgroundColor: "#006d6d",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 40,
  },
  bookBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
