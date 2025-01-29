import { Camera, CameraType, CameraView } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CameraComp() {
    const [hasCameraPer, setCameraPer] = useState(null);
    const cameraRef = useRef(null);
    console.log(Camera.Constants);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setCameraPer(status === "granted");
        })();
    }, []);

    if (hasCameraPer === null) {
        return <Text  style={styles.overlay}>Solicitando permisos...</Text>;
    }

    if (!hasCameraPer) {
        return <Text  style={styles.overlay}>Acceso a la cámara denegado.</Text>;
    }

    return (
        <View style={styles.container}>
            <CameraView ref={cameraRef} style={styles.camera} >
                <View style={styles.overlay}>
                    <Text style={styles.text}>Hello</Text>
                </View>
            </CameraView>
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
        color: "white",
        fontSize: 20,
    },
});

export default CameraComp;
