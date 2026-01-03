import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar
        style="dark" // icons visible on light background
        backgroundColor="#ffffff"
        translucent={false} // 👈 THIS IS THE KEY
      />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
