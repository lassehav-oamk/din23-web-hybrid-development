import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import IAdvert from '@/types/iAdvert';



export default function AdPreview({ title, description, price, contactPhone, contactEmail, photos }: IAdvert) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: photos[0] }} />
        <Text>{title}</Text>
        <Text style={ styles.price }>{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
        flex: 1,
        marginLeft: 8
        
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});