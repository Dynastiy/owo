import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBI5FscDN4_fGrsPO-dzshrpXuGTV2W3pc",
  authDomain: "new-app-3c198.firebaseapp.com",
  databaseURL: "https://new-app-3c198-default-rtdb.firebaseio.com",
  projectId: "new-app-3c198",
  storageBucket: "new-app-3c198.appspot.com",
  messagingSenderId: "491258156977",
  appId: "1:491258156977:web:28c1ea3b700991c36fcf90"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, storage, db };

export default firebaseApp;