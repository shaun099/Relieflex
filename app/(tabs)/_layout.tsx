import { Tabs } from "expo-router";
import { CircleUser, SlidersHorizontal } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Controls",
          tabBarIcon: ({ color, size }) => (
            <SlidersHorizontal size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <CircleUser size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
