import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import {useNavigation} from '@react-navigation/native';
import useStore from "../../zustandStore";

function Album({url,title,description}) {
    
  return (
      <View style={styles.container}>
            <Pressable onPress={()=>{}}>
                <Image source={{uri:url}} height={200} width={200} style={styles.image}></Image>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
  )
}

export default Album

const styles=StyleSheet.create({
    container:{
        paddingHorizontal:20
    }, 
    title:{
        color:"white",
        fontSize:14,
        paddingLeft:15,
        width:"",
        fontWeight:"bold"
    },
    image:{
        borderRadius:10,
        backgroundColor:"gray"
    },
})