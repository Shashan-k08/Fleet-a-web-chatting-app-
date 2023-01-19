
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA1jSn-yRHHQB8TGmTfYVjz1y0Lbndx0n8",
    authDomain: "fleet-7a367.firebaseapp.com",
    projectId: "fleet-7a367",
    storageBucket: "fleet-7a367.appspot.com",
    messagingSenderId: "716958395101",
    appId: "1:716958395101:web:30f9035250900dbba24934",
    measurementId: "G-5LQSH7JRP9"
  };
  


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()