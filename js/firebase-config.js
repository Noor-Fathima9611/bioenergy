import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC58CQopxyzbf9lbSSTjd87gyvWOrIx2ws",
  authDomain: "presentation-5e2d7.firebaseapp.com",
  projectId: "presentation-5e2d7",
  storageBucket: "presentation-5e2d7.appspot.com",
  messagingSenderId: "611360297445",
  appId: "1:611360297445:web:09594c5736d2cffb04df0c",
  measurementId: "G-DY7K82253X"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, firestore, storage };
