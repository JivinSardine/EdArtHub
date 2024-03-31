function verifyKey() {
    const key = document.getElementById('verificationKey').value;
  
    firebase.auth().signInWithCustomToken(key)
      .then((userCredential) => {
        // Key verification success
        const user = userCredential.user;
        document.getElementById('message').innerText = 'Key verified successfully!';
      })
      .catch((error) => {
        // Key verification failed
        document.getElementById('message').innerText = 'Invalid key!';
      });
  }
  