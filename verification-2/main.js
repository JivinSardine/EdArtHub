import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQx8fwlrjgJPlFmBf8Xsm5zU6XTjcHlnQ",
  authDomain: "test-54836.firebaseapp.com",
  databaseURL: "https://test-54836-default-rtdb.firebaseio.com",
  projectId: "test-54836",
  storageBucket: "test-54836.appspot.com",
  messagingSenderId: "187753669530",
  appId: "1:187753669530:web:bb36a04f95c42f20f51023"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    let userFound = false;
    querySnapshot.forEach((doc) => {
      if (doc.data().username === username && doc.data().password === password) {
        userFound = true;
      }
    });
    if (userFound) {
      alert("Login successful");
    } else {
      alert("Invalid username or password");
    }
  } catch (error) {
    console.error(error);
  }
});
