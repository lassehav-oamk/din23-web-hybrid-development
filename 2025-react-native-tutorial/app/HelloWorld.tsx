import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World </Text>
    </View>
  )
}

export default HelloWorld

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})