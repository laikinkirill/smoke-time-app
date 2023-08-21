import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BottombarItem from "../BottombarItem/BottombarItem";

const Bottombar = () => {
  const [isActive, setIsActive] = useState(false);

  const buttonHandler = () => {
    setIsActive((current) => !current);
    alert(isActive);
  };

  return (
    <View style={styles.Bottombar}>
      <BottombarItem
        title="Главная"
        iconName="grid-outline"
        onClick={buttonHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Bottombar: {
    flexDirection: "row",
    padding: 20,
    width: 100 + "%",
    justifyContent: "space-between",
  },
});

export default Bottombar;
