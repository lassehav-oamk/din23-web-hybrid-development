import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconButton({ text }: { text: string }) {
  return (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 50,        
        margin: 10,        
        flexDirection: 'row'        
    }}
    >
      <Ionicons name="add-circle-outline" size={60} color="white" />
      <Text style={{ color: 'white', fontSize: 20}}>Add</Text>
    </View>
  )
}