import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyA0VtZgEqoFiH2GLpwwWYk_FMUJFo2gHv0",
    authDomain: "fir-expotest-37459.firebaseapp.com",
    projectId: "fir-expotest-37459",
    storageBucket: "fir-expotest-37459.appspot.com",
    messagingSenderId: "752284655300",
    appId: "1:752284655300:web:7c2d415b47240a6db4b391"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;