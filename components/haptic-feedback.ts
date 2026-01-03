import * as Haptics from "expo-haptics";
import { Platform, Vibration } from "react-native";

export type VibrationPattern = "off" | "soft" | "pulse" | "deep";

/**
 * Triggers haptic/vibration feedback based on the massage mode
 * Uses expo-haptics for iOS and Vibration API for Android
 */
export const triggerMassageVibration = (pattern: VibrationPattern): void => {
  switch (pattern) {
    case "off":
      // No vibration for off mode
      Vibration.cancel();
      break;

    case "soft":
      // Light, gentle vibration
      if (Platform.OS === "ios") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } else {
        Vibration.vibrate(50);
      }
      break;

    case "pulse":
      // Pulsing pattern - short vibrations with pauses
      if (Platform.OS === "ios") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setTimeout(
          () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
          150
        );
        setTimeout(
          () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
          300
        );
      } else {
        // Pattern: vibrate 100ms, pause 100ms, vibrate 100ms, pause 100ms, vibrate 100ms
        Vibration.vibrate([0, 100, 100, 100, 100, 100]);
      }
      break;

    case "deep":
      // Strong, heavy vibration
      if (Platform.OS === "ios") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        setTimeout(
          () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
          100
        );
      } else {
        Vibration.vibrate(300);
      }
      break;
  }
};

/**
 * Triggers a simple selection feedback
 */
export const triggerSelectionFeedback = (): void => {
  if (Platform.OS === "ios") {
    Haptics.selectionAsync();
  } else {
    Vibration.vibrate(30);
  }
};
