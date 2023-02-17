import { app } from '../js/app';
import { logout } from '../js/comps';
import { redirectUserIfLoggedInOrNot } from '../js/comps';
import { getDatabase, ref, set } from "firebase/database"

redirectUserIfLoggedInOrNot("/index.html")
logout()

const dataBase = getDatabase(app)
const name = document.getElementById("name")
const title = document.getElementById("title")
const portfolio = document.getElementById("portfolio")
const email = document.getElementById("email")
const linkedin = document.getElementById("linkedin")
const about = document.querySelector(".about")
const interests = document.querySelector(".interests")
const image = document.getElementById("image")

const form = document.querySelector(".form")
const UID = localStorage.getItem("UID")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    writeUserData(UID, image.value, name.value, title.value, portfolio.value, email.value, linkedin.value, about.value, interests.value)

})

function writeUserData(userId, image, name, title, portfolio, email, linkedin, about, interests) {
    set(ref(dataBase, 'users/' + userId), {
        image: image,
        name: name,
        title: title,
        portfolio: portfolio,
        email: email,
        linkedin: linkedin,
        about: about,
        interests: interests
    });
}


