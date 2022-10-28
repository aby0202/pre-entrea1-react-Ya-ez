import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDBGnO0RWO_fx9e-opjUlVy4DWXPADQOR4",
  authDomain: "backendadolfina.firebaseapp.com",
  databaseURL: "https://backendadolfina-default-rtdb.firebaseio.com",
  projectId: "backendadolfina",
  storageBucket: "backendadolfina.appspot.com",
  messagingSenderId: "860789285968",
  appId: "1:860789285968:web:cf306f6e9f1d8f1f255d55"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)