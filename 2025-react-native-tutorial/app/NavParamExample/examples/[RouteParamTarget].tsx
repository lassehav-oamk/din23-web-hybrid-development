import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import React from 'react'

export default function RouteParamTarget() {
  
  const local = useLocalSearchParams();

  return (
    <View>
      <Text>This is component named [RouteParamTarget]</Text>
      <Text>Here below is the dynamic route value displayed for example purpose:</Text>
      <Text>Route param: { local.RouteParamTarget}</Text>
    </View>
  )
}