import { app } from "../js/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { logout } from '../js/comps';
import { redirectUserIfLoggedInOrNot } from '../js/comps';
redirectUserIfLoggedInOrNot("/src/index.html")
logout()
const dataBase = getDatabase(app)

const name = document.getElementById("name")
const title = document.getElementById("title")
const portfolio = document.getElementById("portfolio")
const about = document.getElementById("about")
const interests = document.getElementById("interests")
const image = document.querySelector(".image")
const email = document.querySelector(".email")
const linkedin = document.querySelector(".linkedin")
const UID = localStorage.getItem("UID")


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