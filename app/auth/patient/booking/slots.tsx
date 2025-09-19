// app/auth/patient/booking/slots.tsx
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Calendar } from "react-native-calendars";

export default function Slots() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Example booked slots
  const bookedDates = {
    "2024-10-20": { marked: true, dotColor: "grey", disabled: true, disableTouchEvent: true },
    "2024-10-22": { marked: true, dotColor: "grey", disabled: true, disableTouchEvent: true },
  };

  // Example available times per day
  const availableTimes = ["09:00", "11:00", "13:00", "15:00", "17:00"];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.doctorName}>Dr. Helena Fox</Text>
      <Text style={styles.specialization}>General Practitioner</Text>

      {/* Calendar */}
      <Text style={styles.label}>Select Date</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          ...bookedDates,
          ...(selectedDate
            ? { [selectedDate]: { selected: true, selectedColor: "#006d77" } }
            : {}),
        }}
        minDate={new Date().toISOString().split("T")[0]} // disable past
        theme={{
          selectedDayBackgroundColor: "#006d77",
          todayTextColor: "#e63946",
          arrowColor: "#006d77",
        }}
        style={styles.calendar}
      />

      {/* Time slots */}
      {selectedDate ? (
        <>
          <Text style={styles.label}>Select Time</Text>
          <View style={styles.row}>
            {availableTimes.map((time) => {
              const isBooked = selectedDate in bookedDates && time === "13:00"; // Example
              return (
                <TouchableOpacity
                  key={time}
                  style={[
                    styles.option,
                    selectedTime === time && styles.activeOption,
                    isBooked && styles.bookedOption,
                  ]}
                  onPress={() => !isBooked && setSelectedTime(time)}
                  disabled={isBooked}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedTime === time && styles.activeText,
                      isBooked && styles.bookedText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </>
      ) : null}

      {/* Book button */}
      {selectedDate && selectedTime ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/patient/booking/confirm")}
        >
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  doctorName: { fontSize: 20, fontWeight: "700" },
  specialization: { fontSize: 14, color: "#666", marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "600", marginTop: 15, marginBottom: 10 },
  calendar: { borderRadius: 10, marginBottom: 20 },
  row: { flexDirection: "row", flexWrap: "wrap" },
  option: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    minWidth: 70,
    alignItems: "center",
  },
  activeOption: { backgroundColor: "#006d77", borderColor: "#006d77" },
  bookedOption: { backgroundColor: "#eee", borderColor: "#ccc" },
  optionText: { fontSize: 14, color: "#333" },
  activeText: { color: "#fff", fontWeight: "600" },
  bookedText: { color: "#999" },
  button: {
    marginTop: 30,
    backgroundColor: "#006d77",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: { textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "600" },
});
