const firebaseConfig = {
  apiKey: "AIzaSyAB6HApfvw-QioqR99RiliAS1mK2uDMaWE",
  authDomain: "edartdreams-20373.firebaseapp.com",
  databaseURL: "https://edartdreams-20373-default-rtdb.firebaseio.com",
  projectId: "edartdreams-20373",
  storageBucket: "edartdreams-20373.appspot.com",
  messagingSenderId: "547805622683",
  appId: "1:547805622683:web:d64a1f62988118b475713e"
};


firebase.initializeApp(firebaseConfig);

const phoneAuthForm = document.getElementById('phoneAuthForm');
const phoneNumberInput = document.getElementById('phoneNumber');
const verificationCodeInput = document.getElementById('verificationCode');
const sendCodeButton = document.getElementById('sendCodeButton');
const verifyCodeButton = document.getElementById('verifyCodeButton');
const statusMessage = document.getElementById('statusMessage');

sendCodeButton.addEventListener('click', () => {
    const phoneNumber = phoneNumberInput.value;
    const phoneNumberFormatted = `+${phoneNumber}`;

    firebase.auth().signInWithPhoneNumber(phoneNumberFormatted, new firebase.auth.RecaptchaVerifier('phoneAuthForm', {
        size: 'invisible'
    }))
    .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        statusMessage.innerText = "Verification code sent.";
    })
    .catch(error => {
        console.error("Error sending code:", error.message);
        statusMessage.innerText = "Error sending code. Please try again.";
    });
});

verifyCodeButton.addEventListener('click', () => {
    const verificationCode = verificationCodeInput.value;

    window.confirmationResult.confirm(verificationCode)
    .then(result => {
        const user = result.user;
        statusMessage.innerText = "Verification successful. User signed in.";
        // You can redirect or perform other actions after successful authentication
    })
    .catch(error => {
        console.error("Error verifying code:", error.message);
        statusMessage.innerText = "Error verifying code. Please try again.";
    });
});


import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();