import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'

interface Todo {
  id: number
  text: string
  isDone: boolean
}

export default function TodoApp() {
  const [text, setText] = React.useState('')
  const [todos, setTodos] = React.useState<Todo[]>([])
  const [todoCounter, setTodoCounter] = React.useState(0);
  const [isFocused, setIsFocused] = React.useState(false);

  function addTodo() {
    if (text === '') {
      return
    }
    setTodos([...todos, { id: todoCounter, text: text, isDone: false }])
    setTodoCounter(todoCounter + 1);
    setText('')
  }

  function toggleDone(id: number) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      }
      return todo
    }))
  }

  return (
    <View>
      <Text>Todoapp</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput 
          style={ {...styles.input, ...(isFocused ? styles.textInputHighlight : {})} } 
          placeholder="Add a todo" 
          onChange={(event) => setText(event.nativeEvent.text)}
          onFocus={ () => setIsFocused(true) }
          onBlur={ () => setIsFocused(false) }

        />
        <Pressable onPress={addTodo}>
          <View style={ styles.button }>
            <Text>Add</Text>
          </View>
        </Pressable>
      </View>
      <View style={ styles.todoList}>
        {
          todos.map(todo => <TodoItem key={todo.id} toggleDone={toggleDone} id={todo.id} text={todo.text} isDone={todo.isDone} />)
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    padding: 5,
    backgroundColor: 'rgb(240, 240, 220)',
    flex: 1
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 20,
    marginLeft: 0,
    alignItems: 'center'
  },
  todoList: {
    margin: 20
  },
  textInputHighlight: {
    backgroundColor: 'lightblue',
    boxShadow: '0 0 5px rgba(0,0,0,0.5)'

  }

});