import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>

        <Text style={styles.headerTitle}>Edit Profile</Text>

        <Pressable>
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <Text style={styles.sectionTitle}>Personal Info</Text>

        <Input label="Full Name" value="Alex Morgan" />
        <Input label="Email" value="alex@email.com" />
        <Input label="Phone" value="+91 98765 43210" />
        <Input label="Age" value="22" />
        <Input label="Gender" value="Female" />

        {/* Preferences */}
        <Text style={styles.sectionTitle}>Preferences</Text>

        <Input label="Default Therapy" value="Heat" />
        <Input label="Comfort Level" value="Medium" />

        {/* Danger Zone */}
        <Text style={styles.sectionTitle}>Account</Text>

        <Pressable style={styles.dangerButton}>
          <Text style={styles.dangerText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

/* -------- REUSABLE INPUT -------- */

function Input({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        defaultValue={value}
        style={styles.input}
        placeholderTextColor="#999"
      />
    </View>
  );
}

/* -------- STYLES -------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  saveText: {
    color: "#2563EB",
    fontWeight: "600",
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 16,
    fontSize: 14,
    color: "#777",
    fontWeight: "600",
  },
  inputContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 10,
    padding: 12,
  },
  inputLabel: {
    fontSize: 12,
    color: "#777",
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    color: "#000",
  },
  dangerButton: {
    backgroundColor: "#FFE4E6",
    margin: 16,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  dangerText: {
    color: "#DC2626",
    fontWeight: "700",
  },
});
