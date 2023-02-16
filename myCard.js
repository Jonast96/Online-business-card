import { app } from './app';
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const dataBase = getDatabase(app)

const auth = getAuth(app)


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
    } else {
        window.location.href = "index.html"
        localStorage.clear()
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


const name = document.getElementById("name")
const title = document.getElementById("title")
const portfolio = document.getElementById("portfolio")
const about = document.getElementById("about")
const interests = document.getElementById("interests")
const image = document.querySelector(".image")

const email = document.querySelector(".email")
const linkedin = document.querySelector(".linkedin")

const UID = localStorage.getItem("UID")

console.log(UID)



const dbRef = ref(dataBase);
get(child(dbRef, `users/${UID}`)).then((snapshot) => {
    if (snapshot.exists()) {
        const user = snapshot.val()
        generateCard(user)
        console.log(user)

    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});


function generateCard(user) {
    name.innerHTML = user.name;
    title.innerHTML = user.title;
    portfolio.setAttribute('href', user.portfolio);
    portfolio.innerHTML = user.portfolio
    about.innerHTML = user.about;
    interests.innerHTML = user.interests;
    linkedin.setAttribute("href", user.linkedin)
    email.setAttribute('href', `mailto:${user.email}`)
    image.setAttribute('src', user.image)
    console.log(user.image)
}