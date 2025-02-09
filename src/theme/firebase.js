import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const logout = (afterAction = () => {}) => {
  signOut(auth).then(r => afterAction(null));
};

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const email = res.user.email;

        // 허용된 도메일 확인
        if (!email.endsWith('@parable-asia.com')) {
            alert('Access denied. Only @parable-asia.com users can login.');
            logout(); // parable-asia.com 계정이 아닌 경우 로그아웃
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
  }
};