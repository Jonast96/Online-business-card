import { app } from './app';



import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app)


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user)

    } else {
        window.location.href = "index.html"
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