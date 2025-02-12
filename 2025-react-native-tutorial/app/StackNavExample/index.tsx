import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View>
        <Text>This is stack nav index page</Text>
        <Link href="/StackNavExample/page2" style={{ color: 'blue'}}>
            <Text>Go to page2</Text>
        </Link>

    </View>
  )
}