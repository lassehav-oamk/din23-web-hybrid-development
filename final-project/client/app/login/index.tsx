import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React from 'react'

export default function index() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function login() {
        console.log('login');
    }

    function register() {
        console.log('register');
    }

    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Welome to Stuff.com</Text>
        <Text>Please login with your username and password</Text>
        <View style={styles.formContainer}>
            <Text>Username</Text>
            <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            />
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
        padding: 20,
        margin: 20,
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
    },
});