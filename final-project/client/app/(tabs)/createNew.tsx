import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Pressable, Image } from 'react-native';

export default function createNew() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const ref = useRef<CameraView>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    const photo = await ref.current?.takePictureAsync();
    console.log(photo?.uri);
    setPhotoUri(photo?.uri);
  }

  function renderCamera() {
    return (
      <CameraView style={styles.camera} facing={facing} ref={ref}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={takePicture}>
            <View style={{ borderRadius: 15, width: 60, height: 60, backgroundColor: "green"}}></View>
          </Pressable>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>          
        </View>
      </CameraView>
    );
  }

  function renderPhoto() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.camera}>
          <Pressable onPress={() => setPhotoUri(null)}>
            <Text style={styles.text}>Retake?</Text>
          </Pressable>
          <Image source={ { uri: photoUri } }
            contentFit="contain"
            style={{ flex: 1, maxWidth: '100%', aspectRatio: 1 }}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      { photoUri ? renderPhoto() : renderCamera() }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
  button: {
    margin: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
