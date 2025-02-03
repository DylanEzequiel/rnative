import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import CameraComp from '../../components/cameraComp/cameraComp'
import { useNavigation } from '@react-navigation/native';

function CameraScreen() {
    const navigate =useNavigation()
  return (
    <View style={styles.container}>
        <CameraComp></CameraComp>
        
        <Button title='Go Home' onPress={()=>navigate.navigate("Home")}></Button>
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 20,
    },
});
