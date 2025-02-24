import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, Text, TextInput, StyleSheet, Alert, ActivityIndicator, Pressable, Platform, ScrollView } from "react-native";
import { useRouter, useNavigation} from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  

  const handleRegister = async () => {
   // setLoading(true);

    const postData = {
        name: fullName, 
        username, 
        email, 
        phone,
        password
    }
    
    const response = await fetch(apiUrl + '/users', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
    
    if(response.status == 201) {
        Alert.alert("Success", "Account created successfully!");
        setLoading(false);
        router.replace("/login")
    }
    else {
        setLoading(false);
    }

    /*setTimeout(() => {
      setLoading(false);
      
      //router.replace("/login"); // Navigate to login

    }, 1500);*/
  };

    useEffect(() => {
        navigation.setOptions({
            title: "Register",
            headerBackTitle: "Back"  // Set the back button text, but where is it documented? Not found in expo-router or react navigation
          });
    }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <ScrollView>
        <Text style={styles.title}>Register for Stuff.com</Text>

        <TextInput placeholder="Full Name" style={styles.input} value={fullName} onChangeText={setFullName} />
        <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={setUsername} />
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInput placeholder="Phone Number" style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

        <Pressable style={styles.button} onPress={handleRegister} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Register</Text>}
        </Pressable>

        <Pressable onPress={() => router.back()}>
            <Text style={styles.link}>Already have an account? Login</Text>
        </Pressable>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff", paddingBottom: 60},
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, marginBottom: 10 },
  button: { backgroundColor: "#007bff", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  link: { textAlign: "center", marginTop: 15, color: "#007bff" },
});
