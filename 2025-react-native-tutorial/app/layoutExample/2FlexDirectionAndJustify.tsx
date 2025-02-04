import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const FlexDirectionAndJustify = () => {
  return (
    <View style={{
        flex: 1,        
        flexDirection: 'column', // MAIN AXIS
        justifyContent: 'center', // MAIN AXIS - Test out all the values
        alignItems: 'center' // CROSS AXIS
      }}>
        <Text style={{ flex: 1, borderWidth: 1, borderColor: 'black', maxWidth: '50%' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nulla elementum, molestie turpis at, consectetur elit. Aliquam elementum, urna id bibendum vulputate, nulla quam vehicula purus, sit amet pharetra nisi nulla quis ante. Vivamus mattis porttitor augue sed scelerisque. Nunc sodales, mi non molestie feugiat, nisl odio efficitur quam, condimentum condimentum augue nunc sit amet augue. Etiam pulvinar aliquet est, tempus pharetra magna suscipit at.
        </Text>
        <View style={[ styles.box, { flex: 1, backgroundColor: 'green' }]}></View>
        <View style={[ styles.box, { flex: 1, backgroundColor: 'red' }]}></View>
      </View>
  )
}

const styles = StyleSheet.create({
    box: {
      height: 80,
      width: 80,
    }
  })

export default FlexDirectionAndJustify