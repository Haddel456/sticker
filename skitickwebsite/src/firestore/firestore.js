import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBPOh7MCUZj_4W7uXlMQFdtsfN5c77C2lU",
    authDomain: "frontend-ad756.firebaseapp.com",
    projectId: "frontend-ad756",
    storageBucket: "frontend-ad756.appspot.com",
    messagingSenderId: "742456646118",
    appId: "1:742456646118:web:7d6c5a1af46627f4c8de27"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};
