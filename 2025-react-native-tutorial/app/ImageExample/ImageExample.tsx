import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class ImageExample extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <Text>ImageExample</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={{ width: 200, height: 200 }}
        />
        <Image
            source={require('../../assets/images/react-logo.png')}
            style={{ width: 200, height: 200 }}
        />
      </View>
    )
  }
}