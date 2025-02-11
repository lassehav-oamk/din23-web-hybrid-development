import { View, Text } from 'react-native'
import React from 'react'

interface GreeterProps {
    userName: string
}

export default function Greeter(props : GreeterProps) {
  return (
    <View>
      <Text>Greetings { props.userName }!</Text>
    </View>
  )
}