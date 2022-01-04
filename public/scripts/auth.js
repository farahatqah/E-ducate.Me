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
const user = firebase.auth().currentUser;

//update firestore settings
db.settings({ timestampsInSnapshots: true });

//get data
db.collection('TutorRegistration').get().then(snapshot => {
    setupTutor(snapshot.docs);
    snapshot.docs.forEach(doc => {
        db.collection('TutorRegistration').doc(doc.id).collection('RateFeedback').get().then(snapshot => {
                ratefeedback(snapshot.docs);
        });
    });
});


//listen for auth status change
auth.onAuthStateChanged(user => {
    if (user){
        updateDetails(user);
        requestTutor(user);
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
        return db.collection('studentProfile').doc(cred.user.uid).set({
            studentName: signupForm['signup-name'].value,
            studentContactNo: signupForm['signup-phoneNo'].value
        });
    }).then(() => {
        signupForm.reset();
        alert("Your account has been created! Go to Sign-In page")
    });
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
        alert("You are signed in!")
    })
})
