import IAdvert from '@/types/iAdvert';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Pressable, Image, ScrollView } from 'react-native';
import CreateAdvertInfoView from '@/components/CreateAdvertInfoView';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);
  const [uriToTakenPhoto, setUriToTakenPhoto] = useState<string | null>(null);

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

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    setUriToTakenPhoto(photo?.uri);
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }



  function renderCameraView() {
    return (<CameraView style={styles.camera} facing={facing} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <Pressable onPress={() => takePicture()}>
            <View style={ styles.takePictureButton }></View>
          </Pressable>
        </View>
      </CameraView>);
  }

  function renderTakenPhoto() {
    return (
      <ScrollView>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <CreateAdvertInfoView photoUri={uriToTakenPhoto} resetUri={() => setUriToTakenPhoto(null)} />
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      { uriToTakenPhoto ? renderTakenPhoto() : renderCameraView()}
    </View>
  );
}

const styles = StyleSheet.create({
  takePictureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 64,
    
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
