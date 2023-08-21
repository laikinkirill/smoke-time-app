import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottombarItem = ({ title, iconName, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Pressable
      style={[styles.item, isActive && styles.active]}
      onPress={onClick}
    >
      <Ionicons name={iconName} size={24} color="#fff" />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 12,
  },

  active: {
    backgroundColor: "green",
  },
});

export default BottombarItem;
