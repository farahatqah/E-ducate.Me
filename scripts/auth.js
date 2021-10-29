// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGWqdA7qfKOnOBEuo_08nG7YUZM54znTI",
    authDomain: "e-ducate-me.firebaseapp.com",
    databaseURL: "https://e-ducate-me-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "e-ducate-me",
    appId: "1:354977666843:web:c799cf49ed43c013be25be",
    measurementId: "G-7EXJMT3JM0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign-up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const userId = signupForm['username'].value;
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(userId, email, password);
})
