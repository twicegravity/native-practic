import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native'
import {useState } from 'react'

export default function App() {
    const [gameList, setGameList] = useState([]);
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
  
    const handleAddGame = () => {
        if (title && genre && rating) {
            setGameList([...gameList, { title, genre, rating }]); 
            setTitle('');
            setGenre('');
            setRating('');
        }
      };

  
    return (
      <View style={styles.formContainer}>
        <View>
          <TextInput
            style={styles.inputContainer}
            placeholder="Game Title"
            value={title}
            onChangeText={setTitle}
          ></TextInput>
          <TextInput
            style={styles.inputContainer}
            placeholder="Game Genre"
            value={genre}
           onChangeText={setGenre}
          ></TextInput>
          <TextInput
            style={styles.inputContainer}
            placeholder="Rating (1-5)"
            value={rating}
            onChangeText={setRating}
          ></TextInput>
          <Button title="Add Goal" onPress={handleAddGame} />
        </View>
        <View style={styles.listItem}>
        <FlatList 
          data={gameList} 
          keyExtractor={(index) => index.toString()} 
          renderItem={({ item }) => (
            <View>
              <Text>Title: {item.title}</Text> 
              <Text>Genre: {item.genre}</Text> 
              <Text>Rating: {item.rating}</Text> 
            </View>
          )} 
        />
      </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    formContainer: {
      paddingTop: 50,
      paddingHorizontal: 16,
    },
    inputContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "black",
    },
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: "#ccc",
      borderColor: "black",
      borderWidth: 1,
    },
  });

