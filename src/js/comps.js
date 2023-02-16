import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./app";

const auth = getAuth(app)

export function logout() {
    const logOutButton = document.querySelector(".logout-btn")
    logOutButton.addEventListener("click", () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    })
}



export function redirectUserIfLoggedInOrNot(location) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            window.location.href = location
            localStorage.clear()
        }
    });
}