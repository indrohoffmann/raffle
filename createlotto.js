//Uue loto loomiseks
//et kasutada firebase funktsioone firebase.js iset
import * as firebase from "./firebase.js"

let lotterysName = document.querySelector("#lotterysName");
let lotterysEndDate = document.querySelector("#lotterysEndDate");
let lotterysDescription = document.querySelector("#lotterysDescription");
let createNewLotteryBtn = document.querySelector("#createNewLotteryBtn");

// Initialize Firebase Authentication and get a reference to the service


createNewLotteryBtn.onclick = function (e) {
    e.preventDefault(); //Preventing page refresh after signIn button pressed
    console.log("hea ahv");
};





//authentication
/*signInBtn.onclick = function (e) {
    e.preventDefault(); //Preventing page refresh after signIn button pressed
    firebase.signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            // Signed in 
            window.location.replace("mylotterys.html");

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("passwordMessage").innerHTML = "*Incorrect password"
            passwordMessage.style.color = "red";
        });
};*/