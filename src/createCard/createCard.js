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
    const userInfo = {
        image: image.value,
        name: name.value,
        title: title.value,
        portfolio: portfolio.value,
        email: email.value,
        linkedin: linkedin.value,
        about: about.value,
        interests: interests.value
    };
    try {
        writeUserData(userInfo)
        document.location.href = "../myCard/index.html"
    } catch (error) {
        console.log(error)
    }

})

function writeUserData(userInfo) {
    console.log(userInfo)
    set(ref(dataBase, 'users/' + UID), userInfo);
}