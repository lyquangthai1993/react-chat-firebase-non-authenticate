import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAMqOCTERYQf7LrvhauwxDtMg4Jkpz0zNE",
  authDomain: "fatih-chat-dev-web.firebaseapp.com",
  databaseURL: "https://fatih-chat-dev-web.firebaseio.com",
  projectId: "fatih-chat-dev-web",
  storageBucket: "fatih-chat-dev-web.appspot.com",
  messagingSenderId: "61852437446",
  appId: "1:61852437446:web:5bd25526a0a26c336c80c7",
  measurementId: "G-SS8MR325NJ",
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
