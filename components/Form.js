import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import {useState } from 'react'

export default function App() {
    const [enteredText, setEnteredText] = useState("");
    const [goalList, setGoalList] = useState([]);
  
    function goalInputHandler(enteredText) {
      setEnteredText(enteredText);
    }
    function addGoalHandler() {
      setGoalList(currentGoals => [...currentGoals, enteredText]);
    }
  
    return (
      <View style={styles.appContainer}>
        <View>
          <TextInput
            style={styles.inputContainer}
            placeholder="Add Goal"
            onChangeText={goalInputHandler}
          ></TextInput>
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.listItem}>
           {goalList.map((goal) => (
            <Text key={goal}>{goal}</Text>
          ))}
        </View>
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
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: "#ccc",
      borderColor: "black",
      borderWidth: 1,
    },
  });

