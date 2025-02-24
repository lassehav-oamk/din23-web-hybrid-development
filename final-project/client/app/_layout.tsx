import { Stack } from 'expo-router/stack';
import * as SecureStore from 'expo-secure-store';
import useStateStore from '@/stateStore/store';
import { useEffect } from 'react';

export default function Layout() {
  const setJwt = useStateStore((state) => state.setJwt);

  async function checkJwtFromSecureStore() {
    let result = await SecureStore.getItemAsync('jwt');
    if (result) {
      console.log('jwt in secure store')
      setJwt(result);
    } else {
      console.log('No jwt in secure store');
    }
  }

  useEffect(() => {
    checkJwtFromSecureStore()
  }, []);

  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  );
}
