import * as firebase from "firebase";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZTcU98BHti2ZvqORQcdc1ER7UCUQkcrs",
  authDomain: "tutorial-d1cbf.firebaseapp.com",
  databaseURL: "https://tutorial-d1cbf.firebaseio.com",
  projectId: "tutorial-d1cbf",
  storageBucket: "tutorial-d1cbf.appspot.com",
  messagingSenderId: "880345664982",
  appId: "1:880345664982:web:79a2b37a581e6496f7a877",
  measurementId: "G-3L5HRQXW6L",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
