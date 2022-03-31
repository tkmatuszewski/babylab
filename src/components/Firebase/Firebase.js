import { initializeApp } from '@firebase/app';
import {firebaseConfig} from './FirebaseConfig'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseApp = 
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
