import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAUqwMIwPwtMO4OB8hscChBAHCiE4WgBfI",
  authDomain: "code-tracker-fa071.firebaseapp.com",
  databaseURL: "https://code-tracker-fa071.firebaseio.com",
  projectId: "code-tracker-fa071",
  storageBucket: "code-tracker-fa071.appspot.com",
  messagingSenderId: "850944648043"
};

firebase.initializeApp(config);

export default firebase

export const database = firebase.database()