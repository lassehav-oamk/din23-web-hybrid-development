import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router/stack'

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}