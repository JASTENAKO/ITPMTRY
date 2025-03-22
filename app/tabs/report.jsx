// import React, { useContext } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { ThemeContext } from "../../context/ThemeContext"; // ✅ Ensure correct path

// export default function EventsScreen() {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <View style={[styles.container, darkMode && styles.darkContainer]}>
//       <Text style={[styles.title, darkMode && styles.darkText]}>Reports</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f4f4f4",
//   },
//   darkContainer: {
//     backgroundColor: "#121212", // Dark mode background
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   darkText: {
//     color: "#ffffff", // White text for dark mode
//   },
// });

//this is the main code


// import React, { useContext, useEffect, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";
// import { ThemeContext } from "../../context/ThemeContext"; // ✅ Ensure correct path

// export default function ReportsScreen() {
//   const { darkMode } = useContext(ThemeContext);
//   const [location, setLocation] = useState(null);
//   const [mapType, setMapType] = useState("standard");

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         console.log("Permission to access location was denied");
//         return;
//       }
//       let currentLocation = await Location.getCurrentPositionAsync({});
//       setLocation(currentLocation.coords);
//     })();
//   }, []);

//   return (
//     <View style={[styles.container, darkMode && styles.darkContainer]}>
//       {/* Search Bar */}
//       <View style={styles.searchBarContainer}>
//         <TextInput style={styles.searchBar} placeholder="Search..." placeholderTextColor={darkMode ? "#ccc" : "#555"} />
//         <Ionicons name="search" size={24} color={darkMode ? "#fff" : "#000"} style={styles.searchIcon} />
//       </View>
      
//       {/* Report Title */}
//       <Text style={[styles.title, darkMode && styles.darkText]}>Report</Text>
      
//       {/* Map Container */}
//       <View style={styles.mapContainer}>
//         {location ? (
//           <>
//             <MapView
//               style={styles.map}
//               mapType={mapType}
//               initialRegion={{
//                 latitude: location.latitude,
//                 longitude: location.longitude,
//                 latitudeDelta: 0.01,
//                 longitudeDelta: 0.01,
//               }}
//             >
//               <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
//             </MapView>
//             <TouchableOpacity
//               style={styles.mapToggleButton}
//               onPress={() => setMapType(mapType === "standard" ? "satellite" : "standard")}
//             >
//               <Ionicons name={mapType === "standard" ? "globe" : "map"} size={24} color="black" />
//             </TouchableOpacity>
//           </>
//         ) : (
//           <Text style={styles.mapText}>Loading...</Text>
//         )}
//       </View>
      
//       {/* Profile and Details Section */}
//       <View style={styles.profileDetailsContainer}>
//         <TouchableOpacity style={styles.profileButton}>
//           <Text>Profile</Text>
//         </TouchableOpacity>
//         <View style={styles.detailsContainer}>
//           <Text style={styles.detailText}>Details</Text>
//           <View style={styles.inputField} />
//           <View style={styles.inputField} />
//         </View>
//       </View>
      
//       {/* Waste Image Container */}
//       <View style={styles.wasteImageContainer}>
//         <Text>Waste img</Text>
//       </View>
      
//       {/* Camera Button */}
//       <TouchableOpacity style={styles.cameraButton}>
//         <Ionicons name="camera" size={55} color="#000" />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f4f4f4",
//   },
//   darkContainer: {
//     backgroundColor: "#121212",
//   },
//   searchBarContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 16,
//     backgroundColor: "#d3d3d3",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   searchBar: {
//     flex: 1,
//     height: 40,
//     color: "#000",
//   },
//   searchIcon: {
//     marginLeft: 8,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 5,
//     color: "#333",
//   },
//   darkText: {
//     color: "#fff",
//   },
//   mapContainer: {
//     height: 200,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#000",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//     borderRadius: 12,
//     overflow: "hidden",
//   },
//   map: {
//     width: "100%",
//     height: "100%",
//   },
//   mapText: {
//     color: "#000",
//   },
//   mapToggleButton: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     padding: 8,
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   profileDetailsContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   profileButton: {
//     width: 80,
//     height: 80,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#000",
//     marginRight: 16,
//   },
//   detailsContainer: {
//     flex: 1,
//   },
//   detailText: {
//     marginBottom: 8,
//     color: "#000",
//   },
//   inputField: {
//     height: 20,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#000",
//     marginBottom: 8,
//   },
//   wasteImageContainer: {
//     height: 150,
//     width: 200,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#000",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     marginBottom: 16,
//     marginTop: -2,
//     borderRadius: 20,
//   },
//   cameraButton: {
//     marginTop: -3,
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: "#3CB371",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   cameraIcon: {
//     color: "#FFFFFF",
//     fontSize: 30,
//   },
// });


import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { ThemeContext } from "../../context/ThemeContext";

let MapView = ({ children, style }) => <View style={style}>{children}</View>;
let Marker = () => null;

try {
  if (Platform.OS !== "web") {
    MapView = require("react-native-maps").default;
    Marker = require("react-native-maps").Marker;
  }
} catch (error) {
  console.warn("react-native-maps failed to load: ", error);
}

export default function ReportsScreen() {
  const { darkMode } = useContext(ThemeContext);
  const [location, setLocation] = useState(null);
  const [mapType, setMapType] = useState("standard");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  const handleMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setLocation({ latitude, longitude });
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search..." placeholderTextColor={darkMode ? "#ccc" : "#555"} />
        <Ionicons name="search" size={24} color={darkMode ? "#fff" : "#000"} style={styles.searchIcon} />
      </View>
      
      {/* Report Title */}
      <Text style={[styles.title, darkMode && styles.darkText]}>Report</Text>
      
      {/* Map Container */}
      <View style={styles.mapContainer}>
        {location ? (
          <>
            <MapView
              style={styles.map}
              mapType={mapType}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              onPress={handleMapPress}
            >
              <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
            </MapView>
            <TouchableOpacity
              style={styles.mapToggleButton}
              onPress={() => setMapType(mapType === "standard" ? "satellite" : "standard")}
            >
              <Ionicons name={mapType === "standard" ? "globe" : "map"} size={24} color="black" />
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.mapText}>Loading...</Text>
        )}
      </View>
      
      {/* Profile and Details Section */}
      <View style={styles.profileDetailsContainer}>
        <TouchableOpacity style={styles.profileButton}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Details</Text>
          <View style={styles.inputField} />
          <View style={styles.inputField} />
        </View>
      </View>
      
      {/* Waste Image Container */}
      <View style={styles.wasteImageContainer}>
        <Text>Waste img</Text>
      </View>
      
      {/* Camera Button */}
      <TouchableOpacity style={styles.cameraButton}>
        <Ionicons name="camera" size={55} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  searchIcon: {
    marginLeft: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  darkText: {
    color: "#fff",
  },
  mapContainer: {
    height: 200,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapText: {
    color: "#000",
  },
  mapToggleButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  profileDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profileButton: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  detailText: {
    marginBottom: 8,
    color: "#000",
  },
  inputField: {
    height: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 8,
  },
  wasteImageContainer: {
    height: 150,
    width: 200,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
    marginTop: -2,
    borderRadius: 20,
  },
  cameraButton: {
    marginTop: -3,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#3CB371",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
