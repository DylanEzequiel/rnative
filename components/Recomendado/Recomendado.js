import { Button, FlatList, StyleSheet, Text, View } from "react-native"
import Album from "../Album/Album"
import { useState } from "react";
import { useCameraPermissions } from "expo-camera";
import CameraComp from "../cameraComp/cameraComp";



const albums=[
  {
    "url": "https://pixabay.com/es/photos/perro-cachorro-corgi-mascota-2785074/",
    "title": "Cachorro de Corgi",
    "description": "Un adorable cachorro de la raza Corgi, mostrando su característico pelaje corto y orejas grandes. Ideal para los amantes de los perros pequeños y juguetones."
  },
  {
    "url": "https://www.pexels.com/es-es/foto/perro-de-pelo-corto-marron-y-blanco-1108099/",
    "title": "Perro marrón y blanco",
    "description": "Perro de pelo corto en tonos marrón y blanco, posando de manera tranquila y elegante, mostrando su carisma y lealtad."
  },
  {
    "url": "https://unsplash.com/photos/3cAMUE3YAO8",
    "title": "Perro en la playa",
    "description": "Un perro disfrutando de un día soleado en la playa, con el mar de fondo. Perfecto para representar momentos relajantes y felices al aire libre."
  },
  {
    "url": "https://pixabay.com/es/photos/perro-cachorro-mascota-canino-1903313/",
    "title": "Cachorro jugando",
    "description": "Un simpático cachorro en plena acción, disfrutando de un juego al aire libre. Su energía y alegría son contagiosas."
  },
  {
    "url": "https://www.pexels.com/es-es/foto/perro-de-pelo-corto-marron-y-negro-2253275/",
    "title": "Perro en el campo",
    "description": "Un perro de pelo corto, marrón y negro, explorando un paisaje campestre. Refleja libertad y conexión con la naturaleza."
  },
  {
    "url": "https://unsplash.com/photos/1H30uRC1plc",
    "title": "Perro con bufanda",
    "description": "Un perro elegante con una bufanda colorida, mostrando una pose sofisticada. Ideal para transmitir estilo y personalidad."
  },
  {
    "url": "https://pixabay.com/es/photos/perro-cachorro-mascota-canino-104827/",
    "title": "Perro descansando",
    "description": "Un perro relajado, descansando cómodamente. La escena transmite calma y serenidad, perfecta para momentos tranquilos."
  },
  {
    "url": "https://www.pexels.com/es-es/foto/perro-de-pelo-corto-marron-y-negro-458799/",
    "title": "Perro mirando al horizonte",
    "description": "Un perro atento, mirando hacia el horizonte con determinación. Ideal para simbolizar curiosidad y exploración."
  },
  {
    "url": "https://unsplash.com/photos/6cY-FvMlmkQ",
    "title": "Perro en la nieve",
    "description": "Un perro disfrutando de un paisaje nevado, con su pelaje resaltando contra el fondo blanco. Perfecto para escenas invernales."
  },
  {
    "url": "https://pixabay.com/es/photos/perro-cachorro-mascota-canino-1207816/",
    "title": "Cachorro en el césped",
    "description": "Un cachorro juguetón y adorable, sentado sobre un césped verde. Representa ternura y vitalidad en un ambiente natural."
  }
];


function Recomendado() {



  return (
    <View style={styles.container}>
        <Text style={styles.text}>Recomendaciones</Text>
        <FlatList 
            data={albums}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>(<Album url={item.url} title={item.title}></Album>)}
            horizontal={true}></FlatList>
    </View>
  )
}

export default Recomendado

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        display:"inline",
        paddingTop:40
      },
    text:{
        color:"white",
        fontSize:20,
        marginVertical:10,
        fontWeight:"bold",
        paddingHorizontal:20,
      },
})