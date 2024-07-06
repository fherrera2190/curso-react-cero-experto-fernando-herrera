import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return { ok: true, displayName, email, photoURL, uid };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const signInWithUsernamePassword = async ({ email, password }) => {
  try {
    const result = await FirebaseAuth.signInWithEmailAndPassword(
      email,
      password
    );
    const { displayName, email, photoURL, uid } = result.user;
    return { ok: true, displayName, email, photoURL, uid };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
}