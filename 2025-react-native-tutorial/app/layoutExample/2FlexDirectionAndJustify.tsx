import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const FlexDirectionAndJustify = () => {
  return (
    <View style={{
        flex: 1,        
        flexDirection: 'row', // MAIN AXIS
        justifyContent: 'center', // Alignment on MAIN AXIS
        alignItems: 'center' // Alignment on CROSS AXIS
      }}>        
        <View style={{...styles.box, backgroundColor: 'blue' }}></View>
        <View style={[ styles.box, { backgroundColor: 'green' }]}></View>
        <View style={[ styles.box, { backgroundColor: 'red' }]}></View>
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