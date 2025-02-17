import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';


export default function detailView() {

  const glob = useGlobalSearchParams();
  const loc = useLocalSearchParams();

  return (
    <View>
      <Text>detailView</Text>
      <Text>glob: {JSON.stringify(glob)}</Text>
      <Text>loc: {JSON.stringify(loc)}</Text>

    </View>
  )
}