import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
  return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}/>
}