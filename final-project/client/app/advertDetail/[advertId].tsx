import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { useLocalSearchParams, useNavigation  } from 'expo-router';
import useStateStore, { IState } from '@/stateStore/store';
import IAdvert from '@/types/iAdvert';



export default function advertId() {
    const navigation = useNavigation();

    const adverts : IAdvert[] = useStateStore((state: IState) => state.loadedAdverts);
    const findAdvertById = useStateStore((state: IState) => state.findAdvertById);

    // Enable header in stack nav for this component
    useEffect(() => {
        navigation.setOptions({
          title: "test",
          headerBackTitle: "Back"  // Set the back button text, but where is it documented? Not found in expo-router or react navigation
        });
    }, [navigation]);

    const local = useLocalSearchParams();
    const advertId = parseInt(local.advertId);
    const advert : IAdvert | undefined = findAdvertById(advertId);


    return (
        <View>
        <Text>This is now the componen which represents the detail view</Text>
        <Text>For advert with id: {advertId}</Text>
        <Text>Advert title: { advert.title }</Text>
        </View>
    )
}