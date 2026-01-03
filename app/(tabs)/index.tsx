import Slider from "@react-native-community/slider";
import {
  Activity,
  BarChart3,
  Battery,
  BluetoothSearching,
  HeartPulse,
  Leaf,
  PowerOff,
  Waves,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MIN_TEMP = 30;
const MAX_TEMP = 50;
const BATTERY_PERCENTAGE = 75;

type MassageMode = "off" | "soft" | "pulse" | "deep";
type Mode = "relax" | "recovery";

export default function TestScreen() {
  const [temperature, setTemperature] = useState<number>(40);
  const [massageMode, setMassageMode] = useState<MassageMode>("soft");
  const [selectedMode, setSelectedMode] = useState<Mode>("recovery");
  const [isPoweredOn, setIsPoweredOn] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<string>("med");
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <BluetoothSearching />
          </View>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>ThermoBand</Text>
            <Text style={styles.statusText}>● Connected</Text>
          </View>

          <View style={styles.batteryContainer}>
            <Battery size={20} color="#141414" />
            <Text style={styles.batteryText}>{BATTERY_PERCENTAGE}%</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          {/* Temperature Hero */}
          <View style={styles.tempSection}>
            <View style={styles.tempCircle}>
              <Text style={styles.tempValue}>{Math.round(temperature)}°</Text>
              <Text style={styles.tempSub}>
                Heating to {Math.round(temperature)}°
              </Text>
            </View>

            <Pressable
              style={[styles.fab, styles.fabLeft]}
              onPress={() => setTemperature((t) => Math.max(MIN_TEMP, t - 1))}
            >
              <Text style={styles.fabText}>−</Text>
            </Pressable>

            <Pressable
              style={[styles.fab, styles.fabRight]}
              onPress={() => setTemperature((t) => Math.min(MAX_TEMP, t + 1))}
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
              <Preset
                label="Low"
                value={34}
                setTemp={setTemperature}
                active={activePreset === "low"}
                onPress={() => setActivePreset("low")}
              />
              <Preset
                label="Med"
                value={40}
                setTemp={setTemperature}
                active={activePreset === "med"}
                onPress={() => setActivePreset("med")}
              />
              <Preset
                label="High"
                value={45}
                setTemp={setTemperature}
                active={activePreset === "high"}
                onPress={() => setActivePreset("high")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Massage</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {massageMode.toUpperCase()}
                </Text>
              </View>
            </View>
            <View style={styles.massageRow}>
              <Pressable
                style={[
                  styles.massageBox,
                  massageMode === "off" && styles.massageBoxActive,
                ]}
                onPress={() => setMassageMode("off")}
              >
                <PowerOff
                  size={24}
                  color={massageMode === "off" ? "#141414" : "#999"}
                />
                <Text
                  style={[
                    styles.massageLabel,
                    massageMode === "off" && styles.massageLabelActive,
                  ]}
                >
                  Off
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.massageBox,
                  massageMode === "soft" && styles.massageBoxActive,
                ]}
                onPress={() => setMassageMode("soft")}
              >
                <BarChart3
                  size={24}
                  color={massageMode === "soft" ? "#141414" : "#999"}
                />
                <Text
                  style={[
                    styles.massageLabel,
                    massageMode === "soft" && styles.massageLabelActive,
                  ]}
                >
                  Soft
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.massageBox,
                  massageMode === "pulse" && styles.massageBoxActive,
                ]}
                onPress={() => setMassageMode("pulse")}
              >
                <Activity
                  size={24}
                  color={massageMode === "pulse" ? "#141414" : "#999"}
                />
                <Text
                  style={[
                    styles.massageLabel,
                    massageMode === "pulse" && styles.massageLabelActive,
                  ]}
                >
                  Pulse
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.massageBox,
                  massageMode === "deep" && styles.massageBoxActive,
                ]}
                onPress={() => setMassageMode("deep")}
              >
                <Waves
                  size={24}
                  color={massageMode === "deep" ? "#141414" : "#999"}
                />
                <Text
                  style={[
                    styles.massageLabel,
                    massageMode === "deep" && styles.massageLabelActive,
                  ]}
                >
                  Deep
                </Text>
              </Pressable>
            </View>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Modes</Text>
            <View style={styles.modesRow}>
              <Pressable
                style={[
                  styles.modeCard,
                  selectedMode === "relax" && styles.modeCardActive,
                ]}
                onPress={() => setSelectedMode("relax")}
              >
                <View style={styles.modeIconRow}>
                  <Leaf
                    size={24}
                    color={selectedMode === "relax" ? "#fff" : "#3b82f6"}
                  />
                  <Leaf
                    size={20}
                    color={selectedMode === "relax" ? "#666" : "#cbd5e1"}
                  />
                </View>
                <Text
                  style={[
                    styles.modeTitle,
                    selectedMode === "relax" && styles.modeTitleActive,
                  ]}
                >
                  Relax
                </Text>
                <Text
                  style={[
                    styles.modeSubtitle,
                    selectedMode === "relax" && styles.modeSubtitleActive,
                  ]}
                >
                  38°C • Soft
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.modeCard,
                  selectedMode === "recovery" && styles.modeCardActive,
                ]}
                onPress={() => setSelectedMode("recovery")}
              >
                <View style={styles.modeIconRow}>
                  <View style={styles.modeIconContainer}>
                    <HeartPulse
                      size={20}
                      color={selectedMode === "recovery" ? "#fff" : "#141414"}
                    />
                  </View>
                  <View
                    style={[
                      styles.modeIndicator,
                      selectedMode === "recovery" && styles.modeIndicatorActive,
                    ]}
                  />
                </View>
                <Text
                  style={[
                    styles.modeTitle,
                    selectedMode === "recovery" && styles.modeTitleActive,
                  ]}
                >
                  Recovery
                </Text>
                <Text
                  style={[
                    styles.modeSubtitle,
                    selectedMode === "recovery" && styles.modeSubtitleActive,
                  ]}
                >
                  42°C • Pulse
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
        <View style={styles.powerButtonContainer}>
          <Pressable
            style={[
              styles.powerButton,
              isPoweredOn ? styles.powerButtonOn : styles.powerButtonOff,
            ]}
            onPress={() => setIsPoweredOn(!isPoweredOn)}
          >
            <PowerOff size={20} color="#fff" />
            <Text style={styles.powerButtonText}>
              {isPoweredOn ? "Power Off" : "Power On"}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Preset = ({
  label,
  value,
  setTemp,
  active,
  onPress,
}: {
  label: string;
  value: number;
  setTemp: (v: number) => void;
  active?: boolean;
  onPress?: () => void;
}) => (
  <Pressable
    style={[styles.preset, active && styles.presetActive]}
    onPress={() => {
      setTemp(value);
      onPress?.();
    }}
  >
    <Text style={[styles.presetLabel, active && styles.presetActiveText]}>
      {label}
    </Text>
    <Text style={[styles.presetValue, active && styles.presetActiveText]}>
      {value}°C
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: "#f7f7f7",
  },
  root: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    height: 60,
    backgroundColor: "#f7f7f7",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },

  batteryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4,
  },

  batteryText: {
    fontWeight: "600",
    fontSize: 12,
  },

  iconText: { fontWeight: "600" },

  content: { padding: 16, paddingBottom: 140, gap: 20 },
  headerCenter: { alignItems: "center" },

  headerTitle: { fontSize: 18, fontWeight: "700" },

  statusText: { fontSize: 12, color: "green" },

  tempSection: {
    alignItems: "center",
    marginVertical: 24,
    backgroundColor: "transparent",
  },

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
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
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

  massageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },

  massageBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    gap: 8,
  },

  massageBoxActive: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#141414",
  },

  massageLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#999",
  },

  massageLabelActive: {
    color: "#141414",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },

  modesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  modeCard: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  },

  modeCardActive: {
    backgroundColor: "#141414",
  },

  modeIconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  modeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },

  modeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },

  modeIndicatorActive: {
    backgroundColor: "#22c55e",
  },

  modeTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#141414",
    marginBottom: 4,
  },

  modeTitleActive: {
    color: "#fff",
  },

  modeSubtitle: {
    fontSize: 12,
    color: "#666",
  },

  modeSubtitleActive: {
    color: "#999",
  },

  powerButtonContainer: {
    padding: 16,
    paddingBottom: 24,
    backgroundColor: "transparent",
  },

  powerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 30,
    gap: 8,
  },

  powerButtonOn: {
    backgroundColor: "#141414",
  },

  powerButtonOff: {
    backgroundColor: "#22c55e",
  },

  powerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

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
});
