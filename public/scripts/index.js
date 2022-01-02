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

// // navbar show and hide
// $('#auth-nav').on('click', function() {
//   $('#login-register').show();
//   $('#home-section').hide();
//   $('#tutor-section').hide();
//   $('#student-profile').hide();
// });

// $('#home-nav').on('click', function() {
//   $('#login-register').hide();
//   $('#home-section').show();
//   $('#tutor-section').hide();
//   $('#student-profile').hide();
// });

// $('#logo-click').on('click', function() {
//   $('#login-register').hide();
//   $('#home-section').show();
//   $('#tutor-section').hide();
//   $('#student-profile').hide();
// });

// $('#home-link').on('click', function() {
//   $('#login-register').hide();
//   $('#home-section').show();
//   $('#tutor-section').hide();
//   $('#student-profile').hide();
// });

// $('#tutor-category').on('click', function() {
//   $('#login-register').hide();
//   $('#home-section').hide();
//   $('#tutor-section').show();
//   $('#student-profile').hide();
// });

// $('#tutor-nav').on('click', function() {
//   $('#login-register').hide();
//   $('#home-section').hide();
//   $('#tutor-section').show();
//   $('#student-profile').hide();
// });

// $('#profile-nav').on('click', function() {
//   $('#login-register').hide();
//   $('#home-section').hide();
//   $('#tutor-section').hide();
//   $('#student-profile').show();
// });

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
    studentName.innerHTML = '';
    studentContactNo.innerHTML = '';

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

//popup function
var modalBtns = document.querySelectorAll(".modal-open");
modalBtns.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll('.modal-close');
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest(".modal").style.display="none";
  };
});

//setup tutor display
const tutorList = document.querySelector('.display-tutor');

const setupTutor = (data) => {
  let html = '';
  data.forEach(doc => {
    
    const tutor = doc.data();
    const div = `
      <div class="accordian-list">
        <div class="accordian-header">
          <div class="tutor-details-request">
            <div class="tutor-img">
              <img src="images/profileicon2.png" alt="">
            </div>
            <div class="tutor-name-rating">
              <h3>${tutor.tutorName}</h3>
              <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              </div>
            </div>
          </div>
          
        </div>

        <div class="accordian-body">
          <div class="first-col">
              <div class="subjects">
                  <h3>Teaching Subjects</h3>
                  <li>${tutor.teachingSubj}</li>
              </div>
              <div class="qualification">
                  <h3>Highest Education</h3>
                  <li>${tutor.eduBackground}</li>
              </div>
              
          </div>
          <div class="divider"></div>
          <div class="second-col">
              <div class="fees">
                  <h3>Fee per month</h3>
                  <li>RM 200</li>
              </div>
              <div class="schedule">
                  <h3>Available Schedule</h3>
                  <li>Tuesday</li>
                  <li>Thursday</li>
                  <li>Friday</li>
              </div>
              <div class="request-tutor-btn">
                <button class="btn modal-open" data-modal="modal1">Request Tutor</button>
              </div>
          </div>        
        </div>
      </div>
      
    `;
    html += div

  });
  tutorList.innerHTML = html;
  // console.log(tutorList)
}


//comment display
const commentList = document.querySelector('.feedbackpart');

const ratefeedback = (data) => {
  let display = '';
  data.forEach(doc => {
    const fb = doc.data();
    const li = `<li>${fb.comment}</li>`;
    display += li
  });
  commentList.innerHTML = display;
}
//search bar function