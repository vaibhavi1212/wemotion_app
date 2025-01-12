import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  // Animation values
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    // Animate text opacity and position
    opacity.value = withTiming(1, { duration: 1000 });
    translateY.value = withTiming(0, { duration: 1000 });

    // Navigate to start screen after 3 seconds
    const timeout = setTimeout(() => {
      router.replace("/no bottom/Start");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.textContainer, animatedStyle]}>
        <LinearGradient
          colors={["#9370DB", "#6A5ACD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.gradientText}>We Motions</Text>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  gradientText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundClip: "text", // For web (optional)
    backgroundImage: "linear-gradient(to right, #9370DB, #6A5ACD)",
  },
});