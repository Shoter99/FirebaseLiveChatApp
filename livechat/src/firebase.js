import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD_iY_XU3R3U3moQnxdv2gssn-6EpAF70I",
    authDomain: "livechat-f8caa.firebaseapp.com",
    projectId: "livechat-f8caa",
    storageBucket: "livechat-f8caa.appspot.com",
    messagingSenderId: "80628151676",
    appId: "1:80628151676:web:e1e3e0f4d1788ab1c620f9",
    measurementId: "G-LGV1FEBGHG"
}

firebase.initializeApp(config)
export default firebase