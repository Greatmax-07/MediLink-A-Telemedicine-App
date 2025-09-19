// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCuOXuxB5svcwxSjoEhc7z7tC3O1iXT3Dk",
  authDomain: "medilink-db636.firebaseapp.com",
  projectId: "medilink-db636",
  storageBucket: "medilink-db636.appspot.com",
  messagingSenderId: "829968758789",
  appId: "1:829968758789:web:32bb61342d76ee5b4a846c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
