// sign-up and sign-in page
const container = document.getElementById('container');
const signIn = document.getElementById('sign-in');
const signUp = document.getElementById('sign-up');

setTimeout(() => {
  container.classList.add('sign-in');
},200);

const toggle = () => {
  container.classList.toggle('sign-in');
  container.classList.toggle('sign-up');
};

signIn.addEventListener("click",toggle);
signUp.addEventListener("click",toggle);

//navbar show and hide
$('#auth-nav').on('click', function() {
  $('#login-register').show();
  $('#home-section').hide();
  $('#tutor-section').hide();
  $('#student-profile').hide();
});

$('#home-nav').on('click', function() {
  $('#login-register').hide();
  $('#home-section').show();
  $('#tutor-section').hide();
  $('#student-profile').hide();
});

$('#logo-click').on('click', function() {
  $('#login-register').hide();
  $('#home-section').show();
  $('#tutor-section').hide();
  $('#student-profile').hide();
});

$('#home-link').on('click', function() {
  $('#login-register').hide();
  $('#home-section').show();
  $('#tutor-section').hide();
  $('#student-profile').hide();
});

$('#tutor-category').on('click', function() {
  $('#login-register').hide();
  $('#home-section').hide();
  $('#tutor-section').show();
  $('#student-profile').hide();
});

$('#tutor-nav').on('click', function() {
  $('#login-register').hide();
  $('#home-section').hide();
  $('#tutor-section').show();
  $('#student-profile').hide();
});

$('#profile-nav').on('click', function() {
  $('#login-register').hide();
  $('#home-section').hide();
  $('#tutor-section').hide();
  $('#student-profile').show();
});

//navbar when logged in and logged out
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const studentEmail = document.querySelector('.studentEmail');
const studentName = document.querySelector('.studentName');
const studentContactNo = document.querySelector('.studentPhoneNo');

const setupUI = (user) => {
  if (user) {
    db.collection('studentProfile').doc(user.uid).get().then(doc =>{
      //account info
      const email = `<p>${user.email}</p>`;
      const name = `<p>${doc.data().studentName}</p>`;
      const contactNo = `<p>${doc.data().studentContactNo}</p>`;
      studentEmail.innerHTML = email;
      studentName.innerHTML = name;
      studentContactNo.innerHTML = contactNo;
    })
    //toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }
  else {
    studentEmail.innerHTML = '';
    //toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

//accordian list display
const accordianItemHeaders = document.querySelectorAll(".accordian-header");

accordianItemHeaders.forEach(accordianItemHeader => {
accordianItemHeader.addEventListener("click", event => {
    accordianItemHeader.classList.toggle("active");
});
});

//popup functions
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});