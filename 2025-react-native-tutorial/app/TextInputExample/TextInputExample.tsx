import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function TextInputExample() {
  return (
    <View>
      <Text>This is an example for text input with placeholder text</Text>
      <TextInput style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 20,
            padding: 5,
            backgroundColor: 'rgb(240, 240, 220)'
        }}
        placeholder="Placeholder Text"
        cursorColor="blue"
    />
    </View>
  )
}