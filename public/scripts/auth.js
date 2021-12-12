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
const db = firebase.firestore();

//update firestore settings
db.settings({ timestampsInSnapshots: true });

//listen for auth status change
auth.onAuthStateChanged(user => {
    if (user){
        setupUI(user);
        console.log('user logged in: ', user);
    }
    else {
        setupUI();
        console.log('user logged out');
    }
});


// Sign-up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        signupForm.reset();
    })
    alert("Your account has been created! Go to Sign-In page")
})

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

//login
const loginForm = document.querySelector('#signin-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['signin-email'].value;
    const password = loginForm['signin-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //reset the form
        loginForm.reset();
    })
})

































// function signUpForm(){
//     var email = document.getElementById("signup-email");
//     var password = document.getElementById("signup-password");

//     const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
//     //
//     promise.catch(e=>alert(e.message));
//     alert("Sign Up Successfully");
//   }

// //signIN function
// function  signInForm(){
//     var email = document.getElementById("signin-email");
//     var password  = document.getElementById("siginin-password");
//     const promise = auth.signInWithEmailAndPassword(email.value,password.value);
//     promise.catch(e=>alert(e.message));
// }

// //signOut
// function signOut(){
//     auth.signOut();
//     alert("SignOut Successfully from System");
// }

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//       var email = user.email;
//       alert("Hye "+email+" Welcome to E-duacte.me :) ");

//     }else{
//       alert("No Active user Found")
//     }
//   })
