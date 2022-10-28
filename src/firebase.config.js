/** */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ3oa9OrVFuo8_O3uXuNl4EP-IDd5NafE",
  authDomain: "jivo-ecommerce.firebaseapp.com",
  projectId: "jivo-ecommerce",
  storageBucket: "jivo-ecommerce.appspot.com",
  messagingSenderId: "976434908801",
  appId: "1:976434908801:web:d9691d00a0bd43b9b7c780",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
