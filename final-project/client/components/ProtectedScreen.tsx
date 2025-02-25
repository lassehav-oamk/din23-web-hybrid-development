import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router';
import useStateStore from '@/stateStore/store';

export default function ProtectedScreen({ children }) {

    const router = useRouter();
    const isAuth : string = useStateStore((state) => state.jwt);

    useEffect(() => {
        if(isAuth == null) {
            // route the user to the login view
            router.replace('/login');
        }
    }, []);

    

    return (
        <>
            { children }
        </>
    )
}