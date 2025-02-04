import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface HelloWorldProps {
    greeting: string
}

const HelloWorld = (props : HelloWorldProps) => {
  return (
    <View style={styles.container}>
      <Text>{ props.greeting }</Text>
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