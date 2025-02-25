import { StyleSheet, Image, Platform, View, Text, SafeAreaView, Pressable } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import useStateStore from '@/stateStore/store';

export default function TabTwoScreen() {

    const setJwt = useStateStore((state) => state.setJwt)

    async function logout() {
      await SecureStore.deleteItemAsync('jwt');
      setJwt(null);
      console.log('jwt cleared');      
    }


    return (
      <SafeAreaView>
        <Text>Profile</Text>
        <Pressable onPress={logout}>
          <Text>Logout</Text>
        </Pressable>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
