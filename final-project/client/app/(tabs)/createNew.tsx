import IAdvert from '@/types/iAdvert';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Pressable, Image } from 'react-native';

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

  async function submitAdvertDataToApi() {
    console.log('submitAdvertDataToApi');
    const testAdvertData : IAdvert = {
      title: 'Lenovo keyboard',
      description: 'Slightly used keyboard, in good condition',
      price: 20,
      contactPhone: '123456789',
      contactEmail: 'test@email.com',
      photos:[]
    };

    const postData = {
      ad: testAdvertData,
    }

    // submit this test advert data to api
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    try {
      const response = await fetch(apiUrl + '/adverts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      console.log(response);
      // next, we read the advert id from the response and upload the photo to the advert
      // using the put request and http multipart form data
      const responseData = await response.json();
      console.log(responseData);
      const newAdvertId = responseData.createdAdId;

      const putResponse = await fetch(apiUrl + '/adverts/' + newAdvertId + '/photos', {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        }});

    } catch (error) {
      console.error('Error:', error);
    }
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
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
        <Image
          source={{ uri: uriToTakenPhoto }}
          contentFit="contain"
          style={{ width: '100%', aspectRatio: 1 }}
        />
        <Pressable onPress={() => setUriToTakenPhoto(null)}>
          <Text style={{}}>Take another picture</Text>
        </Pressable>

        <Pressable onPress={() => submitAdvertDataToApi()}>
          <View style={{ padding: 20, margin: 20, backgroundColor: 'green'}}>
            <Text style={{ color: 'white'}}>Test advert submit to api</Text>
          </View>
        </Pressable>
      </View>
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
