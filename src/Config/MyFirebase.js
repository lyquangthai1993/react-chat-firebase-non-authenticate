import firebase from "firebase";

const config = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_KEY",
  databaseURL: "YOUR_KEY",
  projectId: "YOUR_KEY",
  storageBucket: "YOUR_KEY",
  messagingSenderId: "YOUR_KEY",
  appId: "YOUR_KEY",
  measurementId: "YOUR_KEY",
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
