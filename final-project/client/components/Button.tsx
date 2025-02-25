import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

interface ButtonProps {
    onPress: () => void,
    type: 'primary' | 'secondary' | 'tertiary',
    value: string
}

export default function Button({onPress, type, value} : ButtonProps) {

    let style = styles.primary;
    if(type != undefined) {
        style = styles[type];
    }

    return (
        <Pressable style={style} onPress={onPress}>
            <Text style={type !== 'tertiary' ? styles.buttonText : null}>{value}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    primary: {
        backgroundColor: "#007bff", 
        padding: 15, 
        borderRadius: 8, 
        alignItems: "center", 
        marginTop: 10 
    },
    buttonText: {
        color: 'white',
    },
    secondary: {
        backgroundColor: "#007baa", 
        padding: 15, 
        borderRadius: 8, 
        alignItems: "center", 
        marginTop: 10 
    },
    tertiary: {
        padding: 15, 
        borderRadius: 8, 
        alignItems: "center", 
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1
    }
})