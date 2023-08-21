import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const test = () => {
  alert("test");
};

const Topbar = () => {
  return (
    <View style={styles.Topbar}>
      <Text style={styles.title}>Главная</Text>
      <Pressable style={styles.button} onPress={test}>
        <Ionicons name="person-circle-outline" size={32} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Topbar: {
    backgroundColor: "#141414",

    width: 100 + "%",
    height: 75,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: 500,
    color: "#fff",
  },

  button: {
    position: "absolute",
    right: 20,
    width: 32,
  },
});

export default Topbar;
