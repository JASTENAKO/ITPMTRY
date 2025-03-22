import { View, Text, StyleSheet } from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default RegisterScreen; // ✅ Ensure a default export
