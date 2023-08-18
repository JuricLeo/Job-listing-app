import app from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANRvxxwG4Cl70xAgyqF5_IqwewTbbNuQs",
  authDomain: "job-listing-app-2fc60.firebaseapp.com",
  projectId: "job-listing-app-2fc60",
  storageBucket: "job-listing-app-2fc60.appspot.com",
  messagingSenderId: "531694632587",
  appId: "1:531694632587:web:d25b9b730644c20c129e8e",
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app };
