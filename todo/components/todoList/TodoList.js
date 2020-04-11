import React from 'react';
import {View, SafeAreaView,FlatList,Text,TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const TodoList =({todo, removalNotes})=>(


<View style={{ height: "80%" }}>
<SafeAreaView>
  <FlatList
    data={todo}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => {
      // console.log(item)
      return (

        <TouchableWithoutFeedback onLongPress={() => removalNotes(item.id)}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
            marginHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: `${item.bgColor}`,
              fontSize: 30,
              padding: 5,
              textAlign: "center",
            }}
          >
            {item.title}
          </Text>
          <Text style={styles.textDefault}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eligendi non quis exercitationem culpa nesciunt nihil aut
            nostrum explicabo.
          </Text>
          <TouchableOpacity
            onPress={() => removalNotes(item.id)}
            activeOpacity={1}
          >
            <Text
              style={{
                position: "absolute",
                bottom: 102,
                right: 20,
                color: "snow",
                fontWeight:"900",
                fontSize: 25,
                backgroundColor:"red",
                paddingLeft:10,
                paddingRight:10,
                height:30,
                borderRadius:10
              }}
            >
              X
            </Text>
          </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
      );
    }}
  />
</SafeAreaView>
</View>
)


export default TodoList;


const styles = StyleSheet.create({
    textDefault: {
      fontSize: 20,
      textAlign: "left",
      paddingLeft: 10,
      color: "snow",
      backgroundColor: "#6495ed",
    },
  });