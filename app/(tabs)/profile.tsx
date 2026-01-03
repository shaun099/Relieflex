import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";

import {
  Image, Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top App Bar */}
        <View style={styles.topBar}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMP2mm9ZpKDXgL8QRUYrVyrs-7cn5k11ft6Dfiatdm8bg4nrUc2fWzOK3qHWBYOqBJVO8JtF_WjQ59GJYBgySYuZ5neYMLua8aI6AntJSlpyQh5jx4dhEF3RsnqwgtbIuYa-1sAa8Bnj47pPokhn7iHqXztHfY587cAoDU72S1MuUfMZe5GIqk7D9tCtTApw7I26ErnLJ6C4qq2yC05GiE83zwS3Kxnr9UFYwYfAsREjFaLooB9etkaRLK7OVoK40ggtv4owwNbrU",
            }}
            style={styles.avatar}
          />

          <Text style={styles.name}>Alex Morgan</Text>

<Pressable onPress={() => router.push("/editProfile")}>
  <Ionicons name="settings-outline" size={22} color="#333" />
</Pressable>
        </View>

        {/* Comfort Score */}
        <View style={styles.cardCenter}>
          <MaterialIcons name="thermostat" size={40} color="#000" />
          <Text style={styles.bigNumber}>85</Text>
          <Text style={styles.subText}>Comfort Index Score</Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.row}>
          <StatBox icon="device-thermostat" label="Avg Temp" value="72°F" />
          <StatBox icon="schedule" label="Usage" value="42h" />
          <StatBox icon="battery-full" label="Battery" value="92%" />
        </View>

        {/* Weekly Usage */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Weekly Usage</Text>
          <Text style={styles.weekValue}>14h 20m</Text>

          <View style={styles.legend}>
            <LegendDot color="#F97316" label="Heat" />
            <LegendDot color="#14B8A6" label="Cool" />
          </View>

          <View style={styles.barRow}>
            {[35, 55, 80, 45, 60, 25, 75].map((h, i) => (
              <View key={i} style={styles.barItem}>
                <View
                  style={[
                    styles.bar,
                    {
                      height: `${h}%`,
                      backgroundColor: i % 2 === 0 ? "#14B8A6" : "#F97316",
                    },
                  ]}
                />
                <Text style={styles.barLabel}>
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Sessions */}
        <Text style={styles.sectionHeader}>Recent Sessions</Text>

        <Session
          title="Post-Workout"
          mode="Cooling"
          temp="68°F"
          time="20m"
          ago="2h ago"
          color="#14B8A6"
          icon="ac-unit"
        />

        <Session
          title="Morning Warmup"
          mode="Heating"
          temp="102°F"
          time="15m"
          ago="8h ago"
          color="#F97316"
          icon="wb-sunny"
        />

        <Session
          title="Deep Focus"
          mode="Cooling"
          temp="71°F"
          time="45m"
          ago="Yesterday"
          color="#14B8A6"
          icon="ac-unit"
        />

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatBox({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.statBox}>
      <MaterialIcons name={icon} size={22} color="#777" />
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

function Session({
  title,
  mode,
  temp,
  time,
  ago,
  color,
  icon,
}: any) {
  return (
    <View style={styles.session}>
      <View style={styles.sessionLeft}>
        <View style={[styles.iconCircle, { backgroundColor: color + "33" }]}>
          <MaterialIcons name={icon} size={20} color={color} />
        </View>
        <View>
          <Text style={styles.sessionTitle}>{title}</Text>
          <Text style={styles.sessionSub}>
            {mode} • {temp}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.sessionTime}>{time}</Text>
        <Text style={styles.sessionAgo}>{ago}</Text>
      </View>
    </View>
  );
}

function LegendDot({ color, label }: any) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 12,
  },
  cardCenter: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  bigNumber: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 6,
  },
  subText: {
    color: "#777",
    marginTop: 4,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
  },
  statLabel: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 2,
  },
  card: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#777",
  },
  weekValue: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 4,
  },
  legend: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    color: "#777",
  },
  barRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 140,
    marginTop: 12,
  },
  barItem: {
    alignItems: "center",
    flex: 1,
  },
  bar: {
    width: 18,
    borderRadius: 4,
  },
  barLabel: {
    fontSize: 11,
    color: "#777",
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 16,
    marginTop: 8,
  },
  session: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 10,
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sessionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  sessionTitle: {
    fontWeight: "700",
  },
  sessionSub: {
    fontSize: 12,
    color: "#777",
  },
  sessionTime: {
    fontWeight: "700",
  },
  sessionAgo: {
    fontSize: 12,
    color: "#999",
  },
});
