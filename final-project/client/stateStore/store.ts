import IAdvert from '@/types/iAdvert'
import { create } from 'zustand'

const useStateStore = create((set, get) => ({
  loadedAdverts: [] as IAdvert[],
  setLoadedAdverts: (adverts: IAdvert[]) => set({ loadedAdverts: adverts}),
  findAdvertById: (id) => {
    return get().loadedAdverts.find((ad) => ad.id == id) 
  }
}));

export default useStateStore;