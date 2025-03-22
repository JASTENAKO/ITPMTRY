// import { useState } from "react";
// import { 
//   View, Text, TextInput, TouchableOpacity, StyleSheet, Alert 
// } from "react-native";
// import { useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const LoginScreen = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     if (email === "test" && password === "test123") {
//       await AsyncStorage.setItem("userToken", "loggedIn"); // Save login state
//       router.replace("/tabs/home"); // Navigate to tabs
//     } else {
//       Alert.alert("Login Failed", "Invalid username or password.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//   style={styles.input}
//   placeholder="Email"
//   keyboardType="email-address"
//   autoCapitalize="none"
//   value={email}
//   onChangeText={setEmail}
//   placeholderTextColor="#666" // Darker placeholder text
// />

// <TextInput
//   style={styles.input}
//   placeholder="Password"
//   secureTextEntry
//   value={password}
//   onChangeText={setPassword}
//   placeholderTextColor="#666" // Darker placeholder text
// />


//       {/* Login Button */}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       {/* Register Button */}
//       <TouchableOpacity style={styles.registerButton} onPress={() => router.push("/register")}>
//         <Text style={styles.registerButtonText}>Create an Account</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f4f4f4",
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "white",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     fontSize: 16,
//   },
//   button: {
//     width: "100%",
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   registerButton: {
//     width: "100%",
//     marginTop: 15,
//     padding: 15,
//     alignItems: "center",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#007bff",
//   },
//   registerButtonText: {
//     color: "#007bff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default LoginScreen;


import { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert 
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 🌐 Backend URL — Make sure to include the correct port if needed
const BACKEND_URL = "http://192.168.1.6:3000";  // Add port if necessary

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔐 Handle Login
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Login Failed", "Please fill in both fields.");
      return;
    }

    try {
      // ✅ Debug: Check URL and Request Body
      console.log("Sending login request to:", `${BACKEND_URL}/login`);
      console.log("Request body:", { user: email, password });

      // 📨 Send login request to backend
      const response = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: email, password })
      });

      // ✅ Debug: Check raw response
      const text = await response.text();
      console.log("Raw response:", text);

      const data = JSON.parse(text);  // Convert response to JSON

      if (response.ok && data.success) {
        // ✅ Store login state and navigate to home
        await AsyncStorage.setItem("userToken", data.token);
        router.replace("/tabs/home");
      } else {
        // ❌ Show error message if login fails
        Alert.alert("Login Failed", data.message || "Invalid credentials.");
      }

    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Failed to connect to the server.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#666"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#666"
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={() => router.push("/register")}>
        <Text style={styles.registerButtonText}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    width: "100%",
    marginTop: 15,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#007bff",
  },
  registerButtonText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
