import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import reportWebVitals from "./reportWebVitals";

// IN THIS PROJECT WE HAVE USED REACT ROUTER TO MAKE OUR WEBSITE SINGLE PAGE APPLICATION (SPA)
// ALSO WE HAVE USED FIREBASE TO STORE OUR DATA IN DATABASE

const firebaseConfig = {
  apiKey: "AIzaSyCwGX0NolrcngYPoFLLL1QxtLk2Anh7zwg",
  authDomain: "mycart-a9cf7.firebaseapp.com",
  projectId: "mycart-a9cf7",
  storageBucket: "mycart-a9cf7.appspot.com",
  messagingSenderId: "164122050502",
  appId: "1:164122050502:web:151ca5f87deb10e3aebcc7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
