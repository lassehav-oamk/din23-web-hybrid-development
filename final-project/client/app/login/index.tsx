import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import useStateStore from '@/stateStore/store';
import { useRouter, useNavigation } from "expo-router";



export default function index() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const jwt : string = useStateStore((state) => state.jwt);
    const setJwt = useStateStore((state) => state.setJwt)
    const router = useRouter();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false }); // Hide header when login screen is mounted
    }, []);

    function login() {
        console.log('login');
        setJwt('TEST');
        router.replace('/(tabs)/createNew')
    }

    function register() {
        console.log('register');
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
                <Pressable style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                <Text>Don't have an account?</Text>
                <Pressable style={styles.button} onPress={register}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>

                <Pressable style={styles.secondaryButton} onPress={continueWithoutLogin}>
                    <Text>Continue browsing without registration</Text>
                </Pressable>
                
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
    button: {
        padding: 10,
        margin: 20,
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
    },
    secondaryButton: {
        padding: 10,
        margin: 20,
        borderColor: 'black',
        borderWidth: 1
    }
});