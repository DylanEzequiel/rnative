import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContainerPlaylist from "./components/containerPlaylist/ContainerPlaylist"
import Recomendado from "./components/Recomendado/Recomendado"
import DetailScreen from './screens/detailScreen';
import CameraScreen from './screens/Camera/Camera';


//Creo la view del home
function HomeScreen() {
  
  const navigate =useNavigation()
  return (
    <View style={styles.container}>
         <Text style={styles.text}>Hola Mundo!</Text>
        <View style={styles.bubbleCont}>
            <Text style={styles.bubble}>ReactNative</Text>
            <Text style={styles.bubble}>Test</Text>
        </View>
        <ContainerPlaylist/>
        <Recomendado/>
        
        <Button title='Take Photo' onPress={()=>navigate.navigate("Camera")}></Button>
    </View>
  )
}

//creo el proveedor para navegar(?)
const Stack = createNativeStackNavigator();


//Defino las Rutas de la app
function RootStack() {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}


//Envuelvo app en el proveedor y pongo las rutas a renderizar
export default function App() {
  return (
    //Proveedor
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="light" />
        {/* Rutas */}
        <RootStack />
      </View>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    display:"inline",
    paddingTop:40
  },
  text:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    paddingHorizontal:20,
  },
  bubble:{
    color:"white",
    fontSize:13,
    fontFamily:"bold",
    paddingHorizontal:10,
    backgroundColor:"gray",
    borderRadius:20
  },
  bubbleCont:{
    flexDirection:'row',
    gap:4,
    paddingHorizontal:20,
    fontWeight:"bold",
    marginTop:20
  }
});
