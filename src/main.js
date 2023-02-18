import './sass/style.scss'
import { app } from './js/app';


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendSignInLinkToEmail } from "firebase/auth";
const auth = getAuth(app)
const registerError = document.querySelector(".registerErrorMessage")
const loginError = document.querySelector(".loginErrorMessage")



const registerForm = document.getElementById("register-form")
registerForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const registerUserName = document.getElementById("register-username").value
  const registerPassword = document.getElementById("register-password").value

  createUserWithEmailAndPassword(auth, registerUserName, registerPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      //...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      registerError.innerHTML = errorCode

    });



})

const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", (e) => {


  e.preventDefault()
  const loginEmail = document.getElementById("login-username").value
  const loginPassword = document.getElementById("login-password").value


  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      loginError.innerHTML = errorCode


    });

})


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    window.location.href = "/createCard/index.html"
    localStorage.setItem("UID", uid)
  } else {

  }
});


const register = document.querySelector(".register")
const registerBtn = document.querySelector(".registerBtn")

const login = document.querySelector(".login")

registerBtn.addEventListener("click", () => {
  register.classList.replace("none", "block")
  login.classList.add("none")
})