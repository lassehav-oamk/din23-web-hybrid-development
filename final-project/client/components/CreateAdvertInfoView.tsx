import { View, Text, Image, Pressable, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import IAdvert from '@/types/iAdvert'

interface ICreateAdvertInfoViewProps {
    photoUri: string | null,
    resetUri: () => void
}

export default function CreateAdvertInfoView({ photoUri, resetUri }: ICreateAdvertInfoViewProps) {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');

    async function submitAdvertDataToApi() {
        console.log('submitAdvertDataToApi');
        const advertData : IAdvert = {
            title: title,
            description: description,
            price: parseFloat(price),
            contactPhone: '123456789',
            contactEmail: 'test@email.com',
            photos:[]
        };

        const postData = {
            ad: advertData,
        }

        // submit this test advert data to api
        const apiUrl = process.env.EXPO_PUBLIC_API_URL;
        try {
            const response = await fetch(apiUrl + '/adverts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            console.log(response);
            // next, we read the advert id from the response and upload the photo to the advert
            // using the put request and http multipart form data
            const responseData = await response.json();
            console.log(responseData);
            const newAdvertId = responseData.createdAdId;

            const formData = new FormData();
            formData.append('files', {
                uri: photoUri,
                name: 'photo.jpg',
                type: 'image/jpeg',
            })

            const putResponse = await fetch(apiUrl + '/adverts/' + newAdvertId + '/photos', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });

        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
    <>
        <Image
            source={{ uri: photoUri }}
            contentFit="contain"
            style={{ width: '100%', aspectRatio: 1 }}
        />
        <Pressable onPress={resetUri}>
            <Text style={{}}>Take another picture</Text>
        </Pressable>

        <View style={ styles.formContainer }>
            <Text>Title</Text>
            <TextInput style={styles.textInput} onEndEditing={event => setTitle(event.nativeEvent.text)}/>

            <Text>Description</Text>
            <TextInput style={styles.textInput} onEndEditing={event => setDescription(event.nativeEvent.text)} />

            <Text>Price</Text>
            <TextInput style={styles.textInput} onEndEditing={ event => setPrice(event.nativeEvent.text)}/>

            <Pressable onPress={() => submitAdvertDataToApi()}>
                <View style={{ padding: 20, margin: 20, backgroundColor: 'green'}}>
                <Text style={{ color: 'white'}}>Submit advert</Text>
                </View>
            </Pressable>
        </View>

        
    </>
  )
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 40
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: 300
    }
});