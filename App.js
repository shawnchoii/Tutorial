import React from "react";
import { StyleSheet, Text, View } from "react-native";

const schedule = {
  title: "CS Courses for 2020-2021",
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bannerStyle}>{schedule.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerStyle: {
    color: "#888",
    fontSize: 32,
  },
});

export default App;
