import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import Topbar from "./src/components/Topbar/Topbar";
import Bottombar from "./src/components/Bottombar/Bottombar";

export default function App() {
  const [count, setCount] = useState(0);
  const [timeList, setTimeList] = useState([]);
  const сurrentTime = new Date().toLocaleTimeString().slice(0, -3);

  const сurrentDate = new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
    weekday: "long",
  })
    .format(new Date())
    .replace(/(\s?\г\.?)/, "");

  const countHandler = () => {
    setCount(count + 1);
    setTimeList((prevFriends) => [...prevFriends, сurrentTime]);
  };

  const clearHandler = () => {
    setCount(0);
    setTimeList([]);
  };

  return (
    <View style={styles.container}>
      <Topbar />
      <Text style={styles.header}>{сurrentDate}</Text>
      <Text style={styles.description}>Нажмите, чтобы считать перекуры</Text>
      <View style={styles.box}>
        <Pressable
          style={[
            styles.button,
            count > 1 && styles.green,
            count > 5 && styles.yellow,
            count > 8 && styles.orange,
            count > 10 && styles.red,
          ]}
          onPress={countHandler}
        >
          <Text style={styles.buttonText}>{count}</Text>
        </Pressable>
      </View>

      <Pressable>
        <Text style={styles.description} onPress={clearHandler}>
          Сбросить
        </Text>
      </Pressable>

      <View style={styles.list}>
        {timeList.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listItem}>
              № {index}: {item}
            </Text>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />

      <Bottombar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    color: "#fff",
    fontSize: 32,
    marginBottom: 80,
  },

  box: {
    width: 80,
  },

  description: {
    color: "#fff",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },

  button: {
    height: 80,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 500,
  },

  green: {
    backgroundColor: "#C8FFE8",
  },

  yellow: {
    backgroundColor: "#FFFDC8",
  },

  orange: {
    backgroundColor: "#FFE2C8",
  },

  red: {
    backgroundColor: "#FFCEC8",
  },

  list: {
    backgroundColor: "#161616",
    width: 100 + "%",
    padding: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "top",
    alignItems: "left",
    height: 200,
    overflow: "scroll",
  },

  listItem: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#212121",
    marginBottom: 5,
    padding: 2,
  },
});
