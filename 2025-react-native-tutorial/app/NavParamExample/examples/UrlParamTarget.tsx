import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function UrlParamTarget() {
  return (
    <View>
      <Text>UrlParamTarget</Text>
      <Text>Here below is the search parameters (query)  value displayed for example purpose:</Text>
      <Text>example: { useLocalSearchParams().example}</Text>
    </View>
  )
}