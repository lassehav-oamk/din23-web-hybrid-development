import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

interface TodoProps {
    toggleDone: (id: number) => void,
    id: number,
    text: string,
    isDone: boolean
}

const TodoItem = ({ toggleDone, id, text, isDone }: TodoProps) => {
  return (
    <Pressable key={id} onPress={ () => toggleDone(id) }>
        <View key={id} style={ styles.todoItem }>
        <Text style={(isDone ? styles.todoDone : {})}>{text}</Text>
        </View>
    </Pressable>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    todoItem:
    {
      padding: 10,
      margin: 10,
      backgroundColor: 'lightgrey'
    },
    todoDone: {
      textDecorationLine: 'line-through'
    },
  });