// authMethods.js
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export async function registerWithEmail(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function loginWithEmail(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}
