// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiSOxPxK_ZV7p9VnkDbMDH1BgOD0Z331s",
    authDomain: "fir-intro-c4591.firebaseapp.com",
    databaseURL: "https://fir-intro-c4591-default-rtdb.firebaseio.com",
    projectId: "fir-intro-c4591",
    storageBucket: "fir-intro-c4591.appspot.com",
    messagingSenderId: "901717631165",
    appId: "1:901717631165:web:0a13cdf7a30953458317d4",
    measurementId: "G-M0CX3NWK55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("studentDetails");

submit.addEventListener("click", function () ==> {

    email: email.value,
    password: password.value,
        
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //Signed up
        const user = userCredential.user;
        console.log
    })

})