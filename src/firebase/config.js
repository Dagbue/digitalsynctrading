import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeqpyPclSjVEp4NfDi0pB9LeR7xGHtATM",
    authDomain: "tradesyncpro.firebaseapp.com",
    databaseURL: "https://tradesyncpro-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tradesyncpro",
    storageBucket: "tradesyncpro.appspot.com",
    messagingSenderId: "311459524491",
    appId: "1:311459524491:web:59f26eaa4a3f734355098e"
};



// init firebase
initializeApp(firebaseConfig)



//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();



export { auth, db, database, storage}

