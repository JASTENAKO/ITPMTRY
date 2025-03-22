import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";


export default function HomeScreen() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, darkMode ? styles.darkBackground : styles.lightBackground]}>
      <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>
        Home Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lightBackground: {
    backgroundColor: "#ffffff",
  },
  darkBackground: {
    backgroundColor: "#121212",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lightText: {
    color: "#000000",
  },
  darkText: {
    color: "#ffffff",
  },
});
