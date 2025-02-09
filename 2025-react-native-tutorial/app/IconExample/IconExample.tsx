import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from './IconButton';

export default function IconExample() {
    return (
        <View style={{ flexDirection: 'column'}}>
            <View style={{ flexDirection: 'row', backgroundColor: 'black', justifyContent: 'space-evenly'}}>
                <Ionicons name="cloud-circle" size={60} color="white" />
                <Ionicons name="card" size={60} color="white" />
                <Ionicons name="chatbox" size={60} color="white" />
                <Ionicons name="star-outline" size={60} color="white" />
            </View>        
            <View>          
                <IconButton text="Add"/>
            </View>
        </View>
    )  
}