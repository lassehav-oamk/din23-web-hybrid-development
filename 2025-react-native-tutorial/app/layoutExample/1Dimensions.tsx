import { View, Text } from 'react-native'
import React from 'react'

const Dimensions = () => {
    return (
        <View style={{ height: 600, paddingTop: 20, flexDirection: 'column' }}>
          <Text style={{flex: 1 }}>Flex demo</Text>
          <View style={{flex: 2, backgroundColor: 'green'}}></View>
          <View style={{flex: 3, backgroundColor: 'red'}}></View>
          <View style={{flex: 4, backgroundColor: 'blue'}}></View>
        </View>
      )
}

export default Dimensions