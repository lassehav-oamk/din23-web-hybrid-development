import IAdvert from '@/types/iAdvert'
import { create } from 'zustand'

const useStateStore = create((set, get) => ({
  loadedAdverts: [] as IAdvert[],
  jwt: null as string | null,
  setLoadedAdverts: (adverts: IAdvert[]) => set({ loadedAdverts: adverts}),
  findAdvertById: (id) => {
    return get().loadedAdverts.find((ad : IAdvert) => ad.id == id) 
  },
  setJwt: (jwt : string) => set({jwt})
}));

export default useStateStore;