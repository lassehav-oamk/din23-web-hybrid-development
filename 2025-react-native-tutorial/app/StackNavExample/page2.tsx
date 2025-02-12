import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function page2() {
  return (
    <View>
        <Text>This is page2</Text>
        <Link href="/" style={{ color: 'blue'}}>
            <Text>Go back to index</Text>
        </Link>
    </View>
  )
}