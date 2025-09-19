// app/auth/patient/home.tsx

import React from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import * as DocumentPicker from "expo-document-picker";

// ✅ custom components
import ChatBot from "../../../components/chatbot"; // floating chatbot
import { HelloWave } from "../../../components/hello-wave";
import { IconSymbol } from "../../../components/ui/icon-symbol";

// ✅ backend config
import config from "../../../config";

// ✅ images
import doctorImg from "../../../assets/doctor.png";
import medilinkLogo from "../../../assets/images/medilink.png";

const { width } = Dimensions.get("window");

const schemes = [
  { id: "1", title: "Ayushman Bharat (PMJAY)", url: "https://pmjay.gov.in/" },
  { id: "2", title: "Jan Aushadhi Scheme", url: "https://janaushadhi.gov.in/" },
  { id: "3", title: "eSanjeevani Telemedicine", url: "https://esanjeevani.in/" },
  { id: "4", title: "National Health Mission", url: "https://nhm.gov.in/" },
];

export default function HomeScreen() {
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        router.push({
          pathname: "/saved_docs",
          params: {
            name: file.name || "",
            uri: file.uri,
            size: file.size?.toString() || "",
          },
        } as any);
      }
    } catch (err) {
      console.log("Error picking document: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Greeting */}
        <View style={styles.topGreeting}>
          <View>
            <Text style={styles.greetUser}>Hi Shreya!</Text>
            <Text style={styles.greetSubtitle}>How are you feeling today?</Text>
          </View>
          <View style={styles.greetIcons}>
            <Ionicons name="notifications-outline" size={24} color="#006d77" style={{ marginRight: 15 }} />
            <Ionicons name="person-circle-outline" size={28} color="#006d77" />
          </View>
        </View>

        {/* Floating news bar */}
        <View style={styles.newsBar}>
          <Text style={styles.newsText}>⚡ Latest Health News: Free vaccination drive this week!</Text>
        </View>

        {/* Notices Section */}
        <Text style={styles.sectionTitle}>Notices</Text>
        <FlatList
          data={schemes}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.noticeCard}>
              <Text style={styles.noticeTitle}>{item.title}</Text>
              <TouchableOpacity style={styles.noticeButton} onPress={() => Linking.openURL(item.url)}>
                <Text style={styles.noticeButtonText}>Open Link</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image source={medilinkLogo} style={styles.logo} resizeMode="contain" />
        </View>

        {/* 🔍 Search Bar */}
        <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => router.push("/auth/patient/PatientSearch")}
        >
          <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Search Doctors</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Doctor Card */}
        <View style={styles.card}>
          <Text style={styles.cardHeading}>Book Primary Consultation</Text>
          <Image source={doctorImg} style={styles.doctorImage} />
          <Text style={styles.doctorName}>Dr. Helena Fox</Text>
          <Text style={styles.specialization}>General Practitioner</Text>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => router.push("/auth/patient/booking/health_assessment")}
          >
            <Text style={styles.bookButtonText}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/auth/patient/home")}>
          <View style={styles.navItem}>
            <Ionicons name="home-outline" size={22} color="#007AFF" />
            <Text style={styles.navText}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/auth/patient/PatientSearch")}>
          <View style={styles.navItem}>
            <Ionicons name="search-outline" size={22} color="#007AFF" />
            <Text style={styles.navText}>Search</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Call Lobby", "Video Call pressed")}>
          <View style={styles.navItem}>
            <MaterialIcons name="video-call" size={24} color="#007AFF" />
            <Text style={styles.navText}>Call Lobby</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pickDocument}>
          <View style={styles.navItem}>
            <MaterialIcons name="cloud-upload" size={22} color="#007AFF" />
            <Text style={styles.navText}>Upload</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Reports", "Reports pressed")}>
          <View style={styles.navItem}>
            <FontAwesome name="file-text-o" size={20} color="#007AFF" />
            <Text style={styles.navText}>View Reports</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* ✅ Floating Chatbot */}
      <ChatBot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { paddingBottom: 120 },

  topGreeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  greetUser: { fontSize: 18, fontWeight: "700", color: "#006d77" },
  greetSubtitle: { fontSize: 14, color: "#444", marginTop: 4 },
  greetIcons: { flexDirection: "row", alignItems: "center" },

  newsBar: {
    backgroundColor: "#e63946",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 6,
  },
  newsText: { color: "#fff", fontSize: 14, fontWeight: "600" },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 15,
    color: "#007AFF",
  },

  noticeCard: {
    width: width * 0.75,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#e6f0ff",
    justifyContent: "center",
    alignItems: "center",
  },
  noticeTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
    color: "#333",
  },
  noticeButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8,
  },
  noticeButtonText: { color: "white", fontWeight: "600" },

  logoContainer: { alignItems: "center", marginTop: 25, marginBottom: 20 },
  logo: { width: 200, height: 110, resizeMode: "contain" },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "90%",
    height: 45,
    alignSelf: "center",
    marginBottom: 15,
  },
  searchIcon: { marginRight: 8 },
  searchPlaceholder: { fontSize: 16, color: "#888" },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ccc", marginHorizontal: 10 },
  orText: { color: "#666", fontWeight: "600" },

  card: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#00897B",
  },
  doctorImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  doctorName: { fontSize: 18, fontWeight: "bold", color: "#000" },
  specialization: { fontSize: 14, color: "#666", marginBottom: 15 },
  bookButton: {
    backgroundColor: "#00897B",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  bookButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, marginTop: 3, color: "#007AFF" },
});
