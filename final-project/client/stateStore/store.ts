import IAdvert from '@/types/iAdvert'
import { create } from 'zustand'

import * as SecureStore from 'expo-secure-store';

const useStateStore = create((set, get) => ({
  loadedAdverts: [] as IAdvert[],
  jwt: null as string | null,
  setLoadedAdverts: (adverts: IAdvert[]) => set({ loadedAdverts: adverts}),
  findAdvertById: (id) => {
    return get().loadedAdverts.find((ad : IAdvert) => ad.id == id) 
  },
  setJwt: async (jwt : string) => {
    if(jwt != null) {
      await SecureStore.setItemAsync('jwt', jwt);
    }  
    set({jwt})
  }  
}));

export default useStateStore;