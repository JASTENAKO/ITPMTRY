import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => router.replace("/LoginScreen")} // ✅ Corrected path
        activeOpacity={0.7} // Adds a slight fade effect when tapped
      >
        <Text style={styles.text}>Welcome to Cleanup Tracker!</Text>
        <Text style={styles.subText}>(Tap anywhere to continue)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  touchable: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007bff",
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
    textAlign: "center",
  },
});
