import { create } from 'zustand'
import firebaseConfig from './firebase-config';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useUserStore = create((set) => ({
  user: null, 
  app, 
  auth,
  setUser: (newUser) => set({ user: newUser }),
  clearUser: () => set({ user: null })
}));


export default useStore;