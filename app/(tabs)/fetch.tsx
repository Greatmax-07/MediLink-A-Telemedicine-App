import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function FetchPage() {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const medicinesPerPage = 5;
  const router = useRouter();

  useEffect(() => {
    const q = query(collection(db, "medicines"), orderBy("timestamp", "desc")); // ✅ Order by timestamp descending
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const meds = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMedicines(meds);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching medicines:", error);
      setLoading(false);
    });

    return () => unsubscribe(); 
  }, []);

  const totalPages = Math.ceil(medicines.length / medicinesPerPage);
  const start = (currentPage - 1) * medicinesPerPage;
  const paginatedMedicines = medicines.slice(start, start + medicinesPerPage);

  const renderPageButtons = () => {
    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <TouchableOpacity
          key={i}
          style={[styles.pageButton, currentPage === i && styles.activePage]}
          onPress={() => setCurrentPage(i)}
        >
          <Text style={currentPage === i ? styles.activePageText : styles.pageText}>{i}</Text>
        </TouchableOpacity>
      );
    }
    return buttons;
  };

  return (
    <LinearGradient colors={["#bfdbfe", "#f9fafb"]} style={styles.container}>
      <Text style={styles.title}>Medicines List</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#3b82f6" />
      ) : (
        <>
          <FlatList
            data={paginatedMedicines}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.name || "Unnamed Medicine"}</Text>
                <Text style={styles.cardStock}>Stock: {item.stock !== undefined ? item.stock : "N/A"}</Text>
              </View>
            )}
          />

          {totalPages > 1 && (
            <View style={styles.pagination}>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <Text style={styles.navText}>←</Text>
              </TouchableOpacity>

              {renderPageButtons()}

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <Text style={styles.navText}>→</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}

      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/submit")}>
        <Text style={styles.addButtonText}>➕ Add More</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#1e3a8a" },
  card: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    shadowColor: "#60a5fa",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3
  },
  cardTitle: { fontSize: 18, fontWeight: "600", color: "#1e40af" },
  cardStock: { fontSize: 14, color: "#374151" },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    flexWrap: "wrap"
  },
  navButton: {
    padding: 8,
    marginHorizontal: 4,
    backgroundColor: "#e0f2fe",
    borderRadius: 8
  },
  navText: { fontSize: 18, color: "#1e40af" },
  pageButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
    borderRadius: 8,
    backgroundColor: "#bfdbfe"
  },
  activePage: {
    backgroundColor: "#3b82f6"
  },
  pageText: { color: "#1e3a8a" },
  activePageText: { color: "#fff", fontWeight: "bold" },
  addButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
    shadowColor: "#3b82f6",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20
  },
  addButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" }
});
