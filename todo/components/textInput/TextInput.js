import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
  Alert,
  Keyboard,
  Image
} from "react-native";


import shortid from "shortid";
import TodoList from '../todoList/TodoList'

const TextInputT = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const getNote = (bgColor) => {
    setTodo([...todo, { title: value, id: shortid.generate(), bgColor }].reverse());
    setValue("");
  };
  console.log(todo);
  const alertAddTask = () => {
    Keyboard.dismiss();
    Alert.alert(
      "Выберите приоритет таски?!",
      value,
      [
        {
          text: "Low",
          onPress: () => getNote((bgColor = "#90ee90")),
        },
        { text: "Hight", onPress: () => getNote((bgColor = "#ffff00")) },
      ],
      { cancelable: false }
    );
  };

  const removalNotes = (id) => {
    setTodo([ ...todo.filter(item=>item.id !== id)])
  };

  return (
    <>
      <View>
      <Image
        source={{
          uri:
            "https://image.shutterstock.com/image-illustration/grunge-texturedust-backgrounddistress-backgroundblack-doted-260nw-1401516119.jpg",
        }}
        style={{ width: "100%", height: 179, position: "absolute", top: 0 }}
      />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          autoFocus
          maxLength={19}
          placeholder="Please enter you note..."
        />
      </View>
      <TouchableOpacity
        onPress={() => alertAddTask()}
        activeOpacity={1}
        style={styles.submitButton}
      >
        <Text style={styles.textBtn}>Submit</Text>
      </TouchableOpacity>

      <TodoList todo={todo} removalNotes={removalNotes}/>
    </>
  );
};
export default TextInputT;

const styles = StyleSheet.create({
  input: {
    marginTop: 80,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "transparent",
    borderBottomColor: "black",
    height: 40,
    marginHorizontal: 20,
    fontSize: 25,
  },
  submitButton: {
    marginHorizontal: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff4500",
    borderRadius: 5,
    marginBottom: 10,
  },
  textBtn: {
    fontSize: 25,
    fontWeight: "600",
    color: "#f8f8ff",
  }
});
