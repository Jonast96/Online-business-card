import './style.scss'

import { app } from './app';



import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(app)



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

      //handle errors here

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
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });

})




onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    window.location.href = "createCard.html"

  } else {

  }
});




const logOutButton = document.querySelector(".logout-btn")
logOutButton.addEventListener("click", () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

})