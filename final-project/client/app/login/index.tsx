import { View, Text, StyleSheet, Pressable, TextInput, Alert } from 'react-native'
import React, { useEffect } from 'react'
import useStateStore from '@/stateStore/store';
import { useRouter, useNavigation } from "expo-router";
import Button from '@/components/Button';

export default function index() {
    const router = useRouter();
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const setJwt = useStateStore((state) => state.setJwt)

    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);


    async function login() {
        console.log('login')
        // send username and password in http request to api
        // if successful, we get JWT in response
        // save the JWT into our global store
        // and then we are logged 
        const usernamePasswordBase64Encoded = btoa(username + ':' + password)
        const loginResponse = await fetch(apiUrl + '/login', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + usernamePasswordBase64Encoded
            }
        })

        if(loginResponse.ok) {
            const responseData = await loginResponse.json();
            console.log(responseData);
            setJwt(responseData.jwt);
            router.replace('/(tabs)/createNew')
        }
        else {
            Alert.alert('Incorrect username or password');
        }

    }

    function register() {
        router.push('/login/signup')
    }

    function continueWithoutLogin() {
        router.replace('/(tabs)')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login required for this Operation</Text>
            <Text>Please login with your username and password</Text>
            <View style={styles.formContainer}>
                <Text>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(text) => setUsername(text)}            />
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                />
                
                <Button type="primary" onPress={login} value="Login"/>

                <Text>Don't have an account?</Text>
                <Button type="secondary" onPress={register} value="Register"/>

                <Button type="tertiary" onPress={continueWithoutLogin} value="Continue browsing without registration"/>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: 300,
    },
    formContainer: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 40,
    },

});