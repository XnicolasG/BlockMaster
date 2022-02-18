
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDQMolHfXRr92888OBvw9FhH-IRaWDSycs",
  authDomain: "dbblockmaster.firebaseapp.com",
  projectId: "dbblockmaster",
  storageBucket: "dbblockmaster.appspot.com",
  messagingSenderId: "528967791182",
  appId: "1:528967791182:web:0cf66576f10c82838ac91f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export{
    app,
    db
}