import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAHa_Dd7sH7hR6j4RVewJPshzlldBvPLfo",
    authDomain: "zimo-db.firebaseapp.com",
    projectId: "zimo-db",
    storageBucket: "zimo-db.appspot.com",
    messagingSenderId: "95539191256",
    appId: "1:95539191256:web:0bb871ef19a9d1bea126ad",
    measurementId: "G-07VZ9BJGKE"
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt': 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase