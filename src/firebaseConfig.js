import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// تنظیمات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnKvuYZSepwN0GS4AXu7R_cxbuxJXPt-k",
  authDomain: "store-d2cbe.firebaseapp.com",
  projectId: "store-d2cbe",
  storageBucket: "store-d2cbe.appspot.com",
  messagingSenderId: "151708890936",
  appId: "1:151708890936:web:0b303910e3a8107881f3cd",
  measurementId: "G-P11WW1TCJB"
};

// مقداردهی اولیه فایربیس
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // اضافه کردن احراز هویت
const analytics = getAnalytics(app);

export { auth, app }; // خروجی گرفتن از auth و app
 