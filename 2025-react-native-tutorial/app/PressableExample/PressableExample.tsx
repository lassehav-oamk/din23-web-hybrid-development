import { View, Text, Pressable} from 'react-native'
import React from 'react'

export default function PressableExample() {
  return (
    <View>
      <Text>PressableExample</Text>
      <Text>This text is not pressable, it is normal text</Text>
      
        <Pressable 
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}
            onPress={() => console.log('onPress')}
            onLongPress={() => console.log('onLongPress')}
        >
        <Text>Pressable text</Text>
      </Pressable>
    </View>
  )
}