import { Image, StyleSheet, Text, View } from "react-native"

function Playlist({url,title}) {
  return (
    <View style={styles.containerPlaylist}>
        <Image source={{uri:url}} style={{height:"70", width:70}}/>
        <Text style={styles.title}> {title}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    containerPlaylist:{display:"flex",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#ccc3",
        width:"48%",
        margin:4,
        borderRadius:12,
        overflow:"hidden"
    },
    title:{color:"white",
        fontSize:12,
        width:100,
        fontWeight:"bold"
    }
})



export default Playlist