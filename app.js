// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQx8fwlrjgJPlFmBf8Xsm5zU6XTjcHlnQ",
  authDomain: "test-54836.firebaseapp.com",
  databaseURL: "https://test-54836-default-rtdb.firebaseio.com",
  projectId: "test-54836",
  storageBucket: "test-54836.appspot.com",
  messagingSenderId: "187753669530",
  appId: "1:187753669530:web:bb36a04f95c42f20f51023"
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