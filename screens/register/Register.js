import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth"
import {initializeApp} from "firebase/app"
import firebaseConfig from '../../firebase-config'


function Register() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [user,setUser]=useState()
    const app = initializeApp(firebaseConfig)
    const auth =getAuth(app)

    async function createProfile() {
        try {
           const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
    
    async function LogIn() {
      if(email && password){
        try {
          console.log("hola")
          const userCredential = await signInWithEmailAndPassword(auth,email,password)
            setUser(userCredential)
        } catch (error) {
          console.error("Error:", error);
          Alert.alert("Opps","Please Try Again")
        }
      }
    }
  return (
    <View style={styles.container}>
        <TextInput
            placeholder='Email'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            placeholder='Password'
            style={styles.input}
            value={password}
            onChangeText={setPassword}
        />
        <Pressable style={styles.button} onPress={()=>createProfile()} className="bg-blue-500">
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>LogIn()}  className="bg-blue-500">
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
  },
  input: {
      width: '100%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      marginBottom: 15,
  },
  button: {
    width: '50%',
    height: 50,
    // backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},
});

export default Register