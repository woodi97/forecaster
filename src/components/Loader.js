import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

function Loader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting Weather</Text>
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});

export default Loader;
