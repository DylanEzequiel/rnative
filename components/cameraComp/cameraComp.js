import { Camera, CameraType, CameraView } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as MediaLibrary from "expo-media-library"

function CameraComp() {
    //permisos de camera
    const [hasCameraPer, setCameraPer] = useState(null);
    //Propiedades de la camara manejado como un formhandler
    const [cameraProps,setCameraProps]=useState({
        zoom:0,
        facing:"Back",
        flash:"off",
        enableTorch:"flashlight-off"
    })
    //definir foto y rerferencia a la cam
    const [photo,setPhoto]=useState(null)
    const cameraRef = useRef(null);

    //Variar las props de la camara
    function toggleSets(prop,op1,op2){
        setCameraProps((current)=>({...current,
            [prop]:current[prop] === op1 ? op2 : op1
        }))

    }

    //pedir permisos apenas inicia la app
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setCameraPer(status === "granted");
        })();
    }, []);

    //tomar una foto
    async function takePhoto(){
        if(cameraRef.current){
            try {
                //Toma foto con la referencia y guarda la uri en photo
                const picture = await cameraRef.current.takePictureAsync()
                setPhoto(picture.uri)
            } catch (error) {
                console.log("salio mal",error)
            }
        }
    }

    async function savePhoto() {
        if(photo){
            try {
                const aset = await MediaLibrary.createAssetAsync(photo)
                const asetInfo = await MediaLibrary.getAssetInfoAsync(aset.id)
                setPhoto(null)
                alert("Foto Guardada!")
            } catch (error) {
                console.log(error)
            }
            
        }
    }

    //Pagina solicitando permisos
    if (hasCameraPer === null) {
        return <Text  style={styles.overlay}>Solicitando permisos...</Text>;
    }

    //sin permisos
    if (!hasCameraPer) {
        return <Text  style={styles.overlay}>Acceso a la cámara denegado.</Text>;
    }

    return (
        <View style={styles.container}>
            {!photo ?(
                <>
                    <Pressable onPress={()=>toggleSets("facing","front","back")}> 
                        <Text style={styles.text}>Girar {cameraProps.facing}</Text>
                    </Pressable>
                    <Pressable onPress={()=>toggleSets("enableTorch",true,false)}> 
                        <Text style={styles.text}>Flash {cameraProps.enableTorch}</Text>
                    </Pressable>
                    <CameraView ref={cameraRef} facing={cameraProps.facing} enableTorch={cameraProps.enableTorch} flash={cameraProps.flash} style={styles.camera} >
                        <View style={styles.overlay}>
                        </View>
                    </CameraView>
                    <Button title='take Photo' style={styles.text} onPress={()=>takePhoto()}>
                    </Button>
                </>
            )
            :
            (
                <>
                    <Image style={styles.camera} source={{uri:photo}}></Image>
                    <Button title='Save' onPress={()=>savePhoto()}></Button>
                </>
            )
            }
            
        </View>
    );
}

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
        color: "Black",
        fontSize: 20,
        fontWeight:"bold"
    },
});

export default CameraComp;
