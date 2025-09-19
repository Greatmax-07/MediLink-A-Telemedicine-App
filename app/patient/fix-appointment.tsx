import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FixAppointment() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Fix Appointment</Text>
      </View>

      {/* Doctor Info */}
      <View style={styles.doctorCard}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.doctorImage}
        />
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>Dr. Helena Fox</Text>
          <Text style={styles.doctorSpec}>Radiologist</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.8</Text>
            <Text style={styles.doctorId}>   ID: 3958648</Text>
          </View>
        </View>
      </View>

      {/* Appointment Time */}
      <View style={styles.appointmentTime}>
        <Text style={styles.timeText}>Thu, 17 Oct 2024 at 16:00 - 16:30 PM</Text>
      </View>
      <Text style={styles.subText}>
        Video Consultation time{"\n"}Starts in 5 days, 7 hours, 19 minutes
      </Text>

      {/* Coupon Section */}
      <View style={styles.couponBox}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="pricetag" size={22} color="#00695C" style={{ marginRight: 8 }} />
          <View>
            <Text style={styles.couponTitle}>Apply Coupon Code</Text>
            <Text style={styles.couponSub}>Unlock offers with coupon code</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Billing Details */}
      <Text style={styles.sectionTitle}>Billing Details</Text>
      <View style={styles.billingRow}>
        <Text style={styles.billingLabel}>Consultation Fee</Text>
        <Text style={styles.billingValue}>₹399/-</Text>
      </View>
      <View style={styles.billingRow}>
        <Text style={styles.billingLabel}>Service fee & tax</Text>
        <Text style={styles.billingValue}>FREE</Text>
      </View>
      <View style={styles.billingRow}>
        <Text style={styles.totalLabel}>Total Payable</Text>
        <Text style={styles.totalValue}>₹399/-</Text>
      </View>

      {/* Appointment For */}
      <View style={styles.appointmentFor}>
        <Ionicons name="person-circle" size={40} color="#00695C" />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.forLabel}>Appointment for</Text>
          <Text style={styles.forName}>Shreya Ghoshal</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.changeBtn}>CHANGE</Text>
        </TouchableOpacity>
      </View>

      {/* Complete Payment */}
      <TouchableOpacity style={styles.payBtn}>
        <Text style={styles.payBtnText}>Complete Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 10 },
  doctorCard: { flexDirection: "row", backgroundColor: "#fff", padding: 12, borderRadius: 10, elevation: 2 },
  doctorImage: { width: 70, height: 70, borderRadius: 35, marginRight: 12 },
  doctorDetails: { flex: 1, justifyContent: "center" },
  doctorName: { fontSize: 18, fontWeight: "600" },
  doctorSpec: { fontSize: 14, color: "gray", marginBottom: 4 },
  ratingRow: { flexDirection: "row", alignItems: "center" },
  ratingText: { marginLeft: 4, fontWeight: "500" },
  doctorId: { marginLeft: 8, color: "gray" },
  appointmentTime: { backgroundColor: "#00695C", borderRadius: 20, padding: 10, alignItems: "center", marginTop: 20 },
  timeText: { color: "#fff", fontWeight: "600" },
  subText: { textAlign: "center", marginTop: 6, color: "gray" },
  couponBox: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderStyle: "dashed", borderColor: "gray", padding: 12, borderRadius: 10, marginVertical: 16 },
  couponTitle: { fontWeight: "600", fontSize: 14 },
  couponSub: { fontSize: 12, color: "gray" },
  applyText: { color: "#00695C", fontWeight: "600" },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginTop: 12, marginBottom: 8 },
  billingRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 4 },
  billingLabel: { color: "gray" },
  billingValue: { fontWeight: "500" },
  totalLabel: { fontWeight: "700", fontSize: 16 },
  totalValue: { fontWeight: "700", fontSize: 16 },
  appointmentFor: { flexDirection: "row", alignItems: "center", backgroundColor: "#E0F2F1", padding: 12, borderRadius: 12, marginTop: 20 },
  forLabel: { color: "gray", fontSize: 12 },
  forName: { fontWeight: "600", fontSize: 14 },
  changeBtn: { color: "#00695C", fontWeight: "700" },
  payBtn: { backgroundColor: "#00695C", padding: 14, borderRadius: 30, alignItems: "center", marginTop: 20 },
  payBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
