import { initializeApp } from "firebase/app";
import "firebase/auth";

export const auth = initializeApp({
  apiKey: "AIzaSyBG2gEk7FHy0_toZUiqTP7DcASDMEnkWMo",
  authDomain: "chatty-pie-4bba6.firebaseapp.com",
  projectId: "chatty-pie-4bba6",
  storageBucket: "chatty-pie-4bba6.appspot.com",
  messagingSenderId: "788475758785",
  appId: "1:788475758785:web:1139aaf2aabac9b907ec40",
}).auth();
