// app/auth/gp/home.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function GPHome() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("2024-10-17");

  // Dummy appointments
  const appointments: Record<
    string,
    { id: number; time: string; patient: string }[]
  > = {
    "2024-10-17": [
      { id: 1, time: "10:00 AM", patient: "Mr. Vinod Jagdale" },
      { id: 2, time: "10:30 AM", patient: "Mr. Vedant Pathak" },
      { id: 3, time: "12:00 PM", patient: "— FREE —" },
      { id: 4, time: "12:30 PM", patient: "Ms. Swaroop Dhope" },
      { id: 5, time: "15:30 PM", patient: "Mr. Pranav Chougule" },
      { id: 6, time: "16:00 PM", patient: "Ms. Shreya Ghoshal" },
      { id: 7, time: "17:00 PM", patient: "Mr. Varad Tanawade" },
    ],
    "2024-10-18": [
      { id: 8, time: "09:00 AM", patient: "Mr. John Doe" },
      { id: 9, time: "11:00 AM", patient: "Ms. Jane Smith" },
    ],
    "2024-10-20": [
      { id: 10, time: "14:00 PM", patient: "Mr. Rajesh Sharma" },
      { id: 11, time: "15:00 PM", patient: "Ms. Pooja Mehta" },
    ],
    "2024-10-22": [
      { id: 12, time: "10:00 AM", patient: "Mr. Kunal Deshmukh" },
      { id: 13, time: "11:30 AM", patient: "Dr. Aparna Nair" },
      { id: 14, time: "13:00 PM", patient: "Mr. Arjun Verma" },
    ],
  };

  const selectedAppointments = appointments[selectedDate] || [];

  // Mark calendar dates
  const markedDates: any = {};
  Object.keys(appointments).forEach((date) => {
    markedDates[date] = {
      selected: date === selectedDate,
      selectedColor: date === selectedDate ? "#006d77" : "#b2dfdb", // dark green if selected, light green otherwise
      selectedTextColor: "#fff",
    };
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/medilink.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/doctor.png")}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Doctor Info */}
      <View style={styles.profile}>
        <Image
          source={require("../../../assets/doctor.png")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Dr. Helena Fox</Text>
        <Text style={styles.specialization}>Radiologist</Text>
      </View>

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <Text style={styles.sectionTitle}>Appointments</Text>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={markedDates}
          theme={{
            todayTextColor: "#006d77",
            arrowColor: "#006d77",
          }}
        />
      </View>

      {/* Appointment Date Title */}
      <Text style={styles.dateTitle}>
        {new Date(selectedDate).toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Text>

      {/* Appointment List */}
      {selectedAppointments.length > 0 ? (
        <FlatList
          data={selectedAppointments}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false} // ✅ disable internal scrolling (since parent ScrollView handles it)
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({ item }) => (
            <View style={styles.appointmentRow}>
              <Text style={styles.appointmentText}>
                {item.time} - {item.patient}
              </Text>
              {item.patient !== "— FREE —" && (
                <TouchableOpacity
                  style={styles.viewCaseButton}
                  onPress={() => router.push("/auth/gp/assessment")}
                >
                  <Text style={styles.viewCaseText}>VIEW CASE</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      ) : (
        <Text style={styles.noAppointments}>No Appointments</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  logo: { width: 140, height: 50 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  profile: { alignItems: "center", marginVertical: 12 },
  profileImage: { width: 80, height: 80, borderRadius: 40 },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 8 },
  specialization: { color: "#666" },
  calendarContainer: { marginHorizontal: 16, marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  dateTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 16,
    marginBottom: 8,
    color: "#333",
  },
  appointmentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  appointmentText: { fontSize: 14, color: "#333", flex: 1, marginRight: 10 },
  viewCaseButton: {
    backgroundColor: "#006d77",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  viewCaseText: { color: "#fff", fontWeight: "600", fontSize: 12 },
  noAppointments: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#888",
  },
});
