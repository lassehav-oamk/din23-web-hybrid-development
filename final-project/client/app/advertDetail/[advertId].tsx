import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { useLocalSearchParams, useNavigation  } from 'expo-router';
import useStateStore from '@/stateStore/store';
import IAdvert from '@/types/iAdvert';

export default function advertId() {
    const navigation = useNavigation();

    const findAdvertById = useStateStore((state) => state.findAdvertById)

    // Enable header in stack nav for this component
    useEffect(() => {
        navigation.setOptions({
          title: "test",
          headerBackTitle: "Back"  // Set the back button text, but where is it documented? Not found in expo-router or react navigation
        });
    }, [navigation]);

    const local = useLocalSearchParams();
    const advertId = local.advertId;
    const advertDataOfThisId : IAdvert = findAdvertById(advertId);

    return (
        <View>
        <Text>This is now the componen which represents the detail view</Text>
        <Text>For advert with id: {advertId}</Text>
        <Text>Title of the current product: {advertDataOfThisId.title}</Text>
        <Text>Seller phone number: { advertDataOfThisId.contactPhone }</Text>
        <Text>Seller email: { advertDataOfThisId.contactEmail }</Text>
        <Text>Price: { advertDataOfThisId.price }</Text>
        <Text>Description: { advertDataOfThisId.description}</Text>
        </View>
    )
}