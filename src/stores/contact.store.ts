import { addDoc, collection } from "firebase/firestore";
import { create } from "zustand";
import { database } from "../../firebase";

interface ContactStore {
  name: string;
  email: string;
  message: string;
  setContactStore: <T extends keyof ContactStore>(key: T, value: ContactStore[T]) => void;
  fAddContact: () => Promise<string | null>;
};

export const useContactStore = create<ContactStore>((set, get) => ({
  name: '',
  email: '',
  message: '',
  setContactStore: (key, value) => set({ [key]: value }),
  fAddContact: async () => {
    const contactsCollectionRef = collection(database, 'contacts');

    try {
      const contactRef = await addDoc(contactsCollectionRef, {
        name: get().name,
        email: get().email,
        message: get().message
      });

      return contactRef.id;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
}));
