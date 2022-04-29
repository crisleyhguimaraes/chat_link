import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
    fbPopup: async (app) => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().singInWinthPopup(provider);
        return result;
    }
};