import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBeHTY-ulrOcszmf8iwh_ZUfEWZ4vvVxf4",
  authDomain: "daveflix-3dc06.firebaseapp.com",
  projectId: "daveflix-3dc06",
  storageBucket: "daveflix-3dc06.appspot.com",
  messagingSenderId: "943570616913",
  appId: "1:943570616913:web:40fb3e9682679dae6d6e70",
  measurementId: "G-T97JZDEH2Y",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
