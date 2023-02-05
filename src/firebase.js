import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { firebaseConfig } from './firebase.config';

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = app.auth();

export { db, auth };