import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import ListCard from "@/components/ListCard";

export default function App() {
  const [goalList, setGoalList] = useState("");

  function InputGoalHandler(text: string) {
    setGoalList(text);
  }

  function addGoalHandler(text: string) {
    setGoalList((currentGoalList) => currentGoalList + text);
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput
          style={styles.inputContainer}
          placeholder="Add Goal"
          onChangeText={InputGoalHandler}
        ></TextInput>
        <Button title="Add Goal" onPress={() => addGoalHandler(goalList)} />
      </View>
      <View>{goalList}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
