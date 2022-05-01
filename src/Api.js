import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import 'firebase/firebase-auth';
// import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default {
    fbPopup: async (app) => {
        const provider = new app.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().singInWinthPopup(provider);
        return result;
    }
};