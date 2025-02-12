import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function TextInputExample() {

  // The event structure is undocumented at https://reactnative.dev/docs/textinput#onendediting
  function onEndEditing(event: any) {
    console.log('onEndEditing');
    console.log(event.nativeEvent.text);
  }

  function onChange(event: any) {
    console.log('onChange');
    console.log(event.nativeEvent.text);
  }

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
        onSubmitEditing={(event) => {
          console.log('onsubmit')
          console.log(event.nativeEvent.text);
        }}
        onEndEditing={onEndEditing}
        onChange={onChange}
    />
    </View>
  )
}