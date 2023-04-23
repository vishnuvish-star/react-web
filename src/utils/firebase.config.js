import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJyI2jrxAwGePr9fdO6GdKIuABtoQeeYk",
  authDomain: "shop-page-a7934.firebaseapp.com",
  projectId: "shop-page-a7934",
  storageBucket: "shop-page-a7934.appspot.com",
  messagingSenderId: "902964407145",
  appId: "1:902964407145:web:2df4c4b708e76a0b812bf8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
