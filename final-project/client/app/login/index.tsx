import { View, Text, StyleSheet, Pressable, TextInput, Alert } from 'react-native'
import React, { useEffect } from 'react'
import useStateStore from '@/stateStore/store';
import { useRouter, useNavigation } from "expo-router";
import Button from '@/components/Button';

export default function index() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    const apiUrl = process.env.EXPO_PUBLIC_API_URL;


    async function login() {
        console.log('login')
    }

    function register() {
        //router.push('/login/signup')
    }

    function continueWithoutLogin() {
        //router.replace('/(tabs)')
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