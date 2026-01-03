import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // TEMP: replace with real auth check later
    const fakeAuthCheck = async () => {
      // Example:
      // const session = await supabase.auth.getSession()
      setIsLoggedIn(false); // 👈 default = NOT logged in
      setChecking(false);
    };

    fakeAuthCheck();
  }, []);

  if (checking) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isLoggedIn) {
    return <Redirect href="/(tabs)/test" />;
  }

  return <Redirect href="/(tabs)" />;
}
