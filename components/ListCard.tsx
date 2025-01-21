import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function ListCard() {
  return (
    <View style={styles.inputContainer}>
      <Text>List of Goals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
