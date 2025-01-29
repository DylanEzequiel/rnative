import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Playlist from '../playlist/playlist';


const catPhotos = [
    { url: "https://cdn.vox-cdn.com/thumbor/Sr3WElLJPeawXamCbs-p9W7uaVg=/0x0:2365x1576/1400x1400/filters:focal(1183x788:1184x789)/cdn.vox-cdn.com/uploads/chorus_asset/file/19779046/Screen_Shot_2020_03_09_at_9.11.45_AM.png", title:"Hola mundo!" },
    { url: "https://www.pexels.com/es-es/foto/foto-de-un-gato-mirando-hacia-arriba-730896/", title: "Gato mirando hacia arriba" },
    { url: "https://unsplash.com/photos/JN0SUcTOig0", title: "Gatito curioso" },
    { url: "https://pixabay.com/es/photos/gato-gatito-mascota-felino-3264041/", title: "Gato en el jardín" }
  ];

function ContainerPlaylist() {
  return (
    <View>
        <FlatList style={styles.container}
        data={catPhotos} 
        numColumns={2}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({item}) => (
        <Playlist url={item.url} title={item.title}/>
        )}
        />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        width:"100%",

    }
})


export default ContainerPlaylist