import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCVSNbTOxNbQQ-PabqH2OkukX4Wks0I6A",
    authDomain: "projeto-8f27f.firebaseapp.com",
    projectId: "projeto-8f27f",
    storageBucket: "projeto-8f27f.appspot.com",
    messagingSenderId: "406656711251",
    appId: "1:406656711251:web:4674243ca849cb073de4a6"
} 

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};