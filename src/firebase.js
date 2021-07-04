import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA9hHy_2rgcpS34s1gsn4hGbCDQVhCrJ00",
    authDomain: "linkedin-clone-e2c05.firebaseapp.com",
    projectId: "linkedin-clone-e2c05",
    storageBucket: "linkedin-clone-e2c05.appspot.com",
    messagingSenderId: "186777619639",
    appId: "1:186777619639:web:65bb86f99f0d6229ead132"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
