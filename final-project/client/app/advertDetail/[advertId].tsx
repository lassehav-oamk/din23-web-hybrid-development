import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function advertId() {

    const local = useLocalSearchParams();
    const advertId = local.advertId;

    return (
        <View>
        <Text>This is now the componen which represents the detail view</Text>
        <Text>For advert with id: {advertId}</Text>
        </View>
    )
}