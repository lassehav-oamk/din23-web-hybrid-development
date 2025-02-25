import { Stack } from 'expo-router/stack';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react'
import useStateStore from '@/stateStore/store';

export default function Layout() {

  const setJwt = useStateStore((state) => state.setJwt)

  async function checkJwtFromSecureStorage() {
    const result = await SecureStore.getItemAsync('jwt')
    if(result) {
      // update the zustand store with the jwt
      setJwt(result)
    } else {
      console.log('No JWT in secure store')
    }
  }
  
  useEffect(() => {
    checkJwtFromSecureStorage();
  }, []);

  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  );
}
