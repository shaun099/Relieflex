import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const MIN_TEMP = 30;
const MAX_TEMP = 50;

const ThermoBandScreen: React.FC = () => {
  const [temperature, setTemperature] = useState<number>(40);
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f7f7f7"
        translucent={false}
      />

      <SafeAreaView
        style={[
          styles.safeArea,
          {
            paddingTop: insets.top, // ✅ prevents overlap
          },
        ]}
        edges={["top", "left", "right"]}
      >
        <View style={styles.root}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>BT</Text>
            </View>

            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>ThermoBand</Text>
              <Text style={styles.statusText}>● Connected</Text>
            </View>

            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>75%</Text>
            </View>
          </View>

          <ScrollView contentContainerStyle={styles.content}>
            {/* Temperature Hero */}
            <View style={styles.tempSection}>
              <View style={styles.tempCircle}>
                <Text style={styles.tempValue}>
                  {Math.round(temperature)}°
                </Text>
                <Text style={styles.tempSub}>
                  Heating to {Math.round(temperature)}°
                </Text>
              </View>

              <Pressable
                style={[styles.fab, styles.fabLeft]}
                onPress={() =>
                  setTemperature((t) => Math.max(MIN_TEMP, t - 1))
                }
              >
                <Text style={styles.fabText}>−</Text>
              </Pressable>

              <Pressable
                style={[styles.fab, styles.fabRight]}
                onPress={() =>
                  setTemperature((t) => Math.min(MAX_TEMP, t + 1))
                }
              >
                <Text style={styles.fabText}>+</Text>
              </Pressable>
            </View>

            {/* Heat Level */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Heat Level</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>CUSTOM</Text>
                </View>
              </View>

              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={MIN_TEMP}
                maximumValue={MAX_TEMP}
                step={1}
                value={temperature}
                onValueChange={setTemperature}
                minimumTrackTintColor="#141414"
                maximumTrackTintColor="#d6d6d6"
                thumbTintColor="#141414"
              />

              <View style={styles.sliderLabels}>
                <Text style={styles.sliderLabel}>30°C</Text>
                <Text style={styles.sliderLabel}>40°C</Text>
                <Text style={styles.sliderLabel}>50°C</Text>
              </View>

              <View style={styles.presetRow}>
                <Preset label="Low" value={34} setTemp={setTemperature} />
                <Preset
                  label="Med"
                  value={40}
                  setTemp={setTemperature}
                  active
                />
                <Preset label="High" value={45} setTemp={setTemperature} />
              </View>
            </View>
          </ScrollView>

          {/* Bottom Bar */}
          <View
            style={[
              styles.bottomBar,
              { paddingBottom: insets.bottom || 16 },
            ]}
          >
            <Pressable style={styles.powerButton}>
              <Text style={styles.powerText}>Power Off</Text>
            </Pressable>

            <Pressable style={styles.settingsButton}>
              <Text style={styles.iconText}>⚙</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

/* ---------- Preset ---------- */

const Preset = ({
  label,
  value,
  setTemp,
  active,
}: {
  label: string;
  value: number;
  setTemp: (v: number) => void;
  active?: boolean;
}) => (
  <Pressable
    style={[styles.preset, active && styles.presetActive]}
    onPress={() => setTemp(value)}
  >
    <Text style={[styles.presetLabel, active && styles.presetActiveText]}>
      {label}
    </Text>
    <Text style={[styles.presetValue, active && styles.presetActiveText]}>
      {value}°C
    </Text>
  </Pressable>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },

  root: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },

  headerCenter: { alignItems: "center" },

  headerTitle: { fontSize: 18, fontWeight: "700" },

  statusText: { fontSize: 12, color: "green" },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center",
  },

  iconText: { fontWeight: "600" },

  content: { padding: 16, paddingBottom: 140 },

  tempSection: { alignItems: "center", marginVertical: 24 },

  tempCircle: {
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 16,
    borderColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },

  tempValue: { fontSize: 56, fontWeight: "800" },

  tempSub: { fontSize: 14, color: "#666" },

  fab: {
    position: "absolute",
    top: "50%",
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },

  fabLeft: { left: 0 },
  fabRight: { right: 0 },

  fabText: { fontSize: 24, fontWeight: "700" },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  cardTitle: { fontSize: 16, fontWeight: "700" },

  badge: {
    backgroundColor: "#141414",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  badgeText: { color: "#fff", fontSize: 10, fontWeight: "700" },

  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },

  sliderLabel: { fontSize: 12, color: "#999" },

  presetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  preset: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 4,
  },

  presetActive: { backgroundColor: "#141414" },

  presetLabel: { fontSize: 12, fontWeight: "700" },

  presetValue: { fontSize: 10 },

  presetActiveText: { color: "#fff" },

  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#f7f7f7",
  },

  powerButton: {
    flex: 1,
    height: 56,
    backgroundColor: "#141414",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  powerText: { color: "#fff", fontSize: 18, fontWeight: "700" },

  settingsButton: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ThermoBandScreen;
