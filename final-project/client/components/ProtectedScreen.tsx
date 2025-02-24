import { useEffect, useState } from "react";
import { useRouter, usePathname } from "expo-router";
import useStateStore from '@/stateStore/store';

export default function ProtectedScreen({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname(); // Get current screen path
  const isAuth : string[] = useStateStore((state) => state.jwt);

  useEffect(() => {
        console.log('protected screen auth status: ' + isAuth);
        if (isAuth == null) {
            router.replace({
            pathname: "/login",
            params: { redirectTo: pathname }, // Store the original route
            });
        } 
    }, []);

  if (!isAuth) return null; // Prevent unauthorized content from flashing

  return <>{children}</>;
}