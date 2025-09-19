// components/chatbot.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Markdown from "react-native-markdown-display"; // ✅ Markdown renderer
import config from "../config"; // ✅ uses your config.js

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot"; // strict typing
};

export default function ChatBot() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(config.api.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.api.key}`,
        },
        body: JSON.stringify({
          model: config.api.model,
          messages: [
            { role: "system", content: config.api.systemPrompt },
            { role: "user", content: input },
          ],
          temperature: config.api.temperature,
          max_tokens: config.api.max_tokens,
          top_p: config.api.top_p,
        }),
      });

      const data = await response.json();
      const botReply =
        data?.choices?.[0]?.message?.content?.trim() ||
        "⚠️ Sorry, I couldn’t process that.";

      const botMessage: Message = {
        id: Date.now().toString(),
        text: botReply,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chatbot error:", err);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "⚠️ Network error",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <TouchableOpacity
        style={[styles.fab, { backgroundColor: config.ui.chatbot.color }]}
        onPress={() => setVisible(true)}
      >
        <Ionicons name={config.ui.chatbot.icon as any} size={28} color="#fff" />
      </TouchableOpacity>

      {/* Chat Window */}
      <Modal
        visible={visible}
        animationType="slide"
        transparent
        onRequestClose={() => setVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.modalContainer}
        >
          <View style={styles.chatWindow}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerText}>MediBot</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* Messages */}
            <FlatList
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.message,
                    item.sender === "user" ? styles.userMsg : styles.botMsg,
                  ]}
                >
                  {item.sender === "bot" ? (
                    <Markdown style={markdownStyles}>{item.text}</Markdown>
                  ) : (
                    <Text style={styles.messageText}>{item.text}</Text>
                  )}
                </View>
              )}
              contentContainerStyle={{ padding: 10 }}
            />

            {/* Input */}
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Type your message..."
              />
              <TouchableOpacity
                style={[styles.sendButton, loading && { opacity: 0.5 }]}
                onPress={sendMessage}
                disabled={loading}
              >
                <Ionicons name="send" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 80,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  chatWindow: {
    backgroundColor: "#fff",
    height: "50%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#4A90E2",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  message: {
    marginVertical: 4,
    padding: 10,
    borderRadius: 8,
    maxWidth: "80%",
  },
  userMsg: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  botMsg: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  messageText: { fontSize: 15, color: "#333" },
  inputRow: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

// ✅ Markdown styles
const markdownStyles = {
  body: { fontSize: 15, color: "#333" } as const,
  heading1: { fontSize: 20, fontWeight: "700" as const, color: "#006d77" },
  heading2: { fontSize: 18, fontWeight: "600" as const, color: "#006d77" },
  strong: { fontWeight: "700" as const },
  em: { fontStyle: "italic" as const },
  bullet_list: { marginVertical: 4 },
  ordered_list: { marginVertical: 4 },
  link: { color: "#007AFF", textDecorationLine: "underline" as const },
};
