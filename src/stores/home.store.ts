import { create } from 'zustand';
import Brand from '~/types/brand.type';
import Slide from '~/types/slide.type';

interface HomeState {
    slides: Slide[];
    brands: Brand[];
    setHomeStore: <T extends keyof HomeState>(key: T, value: HomeState[T]) => void;
}

export const useHomeStore = create<HomeState>((set) => ({
    slides: [],
    brands: [],
    setHomeStore: (key, value) => set({ [key]: value }),
}));

export default useHomeStore;