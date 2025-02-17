import { create } from 'zustand';
import IAdvert from '@/types/iAdvert';

export interface IState {
    loadedAdverts: IAdvert[],
    addAdverts: (adverts: IAdvert[]) => void,
    findAdvertById: (id: number) => IAdvert | undefined,
    //removeAllBears: () => void,
}

const useStateStore = create<IState>((set, get) => ({
    loadedAdverts: [] as IAdvert[],
    addAdverts: (adverts: IAdvert[]) => set({ loadedAdverts: adverts }),
    findAdvertById: (id: number) => {
        return get().loadedAdverts.find((advert : IAdvert) => advert.id === id);
    },

    //removeAllBears: () => set({ bears: 0 }),
}));

export default useStateStore;