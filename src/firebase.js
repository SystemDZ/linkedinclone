import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "key",
    authDomain: "key",
    projectId: "key",
    storageBucket: "key",
    messagingSenderId: "key",
    appId: "key"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
