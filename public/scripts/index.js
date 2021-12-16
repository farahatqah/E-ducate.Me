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

const setupUI = (user) => {
  if (user) {
    //toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }
  else {
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

