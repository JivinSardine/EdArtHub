// Initialize Firebase
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

const auth = firebase.auth();
const database = firebase.database();

// Get references to the form elements
const verificationForm = document.getElementById('verification-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const keyInput = document.getElementById('key');
const errorMessage = document.getElementById('error-message');

// Add an event listener for form submission
verificationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const key = keyInput.value;

  // Sign in with email and password
  auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          // Check if the entered key matches the key in the database
          const userRef = database.ref('users/' + auth.currentUser.uid);
          userRef.once('value')
              .then((snapshot) => {
                  const userData = snapshot.val();
                  if (userData && userData.key === key) {
                      // Redirect to the desired HTML page
                      window.location.href = 'success.html';
                  } else {
                      errorMessage.textContent = 'Invalid key';
                  }
              })
              .catch((error) => {
                  console.error('Error fetching user data:', error);
                  errorMessage.textContent = 'An error occurred';
              });
      })
      .catch((error) => {
          console.error('Error signing in:', error);
          errorMessage.textContent = 'Invalid email or password';
      });
});