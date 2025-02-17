import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { useLocalSearchParams, useNavigation  } from 'expo-router';

export default function advertId() {
    const navigation = useNavigation();

    // Enable header in stack nav for this component
    useEffect(() => {
        navigation.setOptions({
          title: "test",
          headerBackTitle: "Back"  // Set the back button text, but where is it documented? Not found in expo-router or react navigation
        });
    }, [navigation]);

    const local = useLocalSearchParams();
    const advertId = local.advertId;

    return (
        <View>
        <Text>This is now the componen which represents the detail view</Text>
        <Text>For advert with id: {advertId}</Text>
        </View>
    )
}