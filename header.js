//Selleks et näidata kasutaja nime ja logout nuppu

//et kasutada firebase funktsioone firebase.js iset
import * as firebase from "./firebase.js"

var loggedInUser = document.getElementById('loggedInUser');
var loggingOut = document.getElementById("loggingOut");
var signInBtn = document.getElementById("signInBtn")


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.getAuth(firebase.app);

firebase.onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const uid = user.uid;
        loggedInUser.innerText = user.displayName
        loggedInUser.style.display = "block";
        loggedInUser.removeAttribute("href");
        loggingOut.style.cursor = "pointer";
        signInBtn.style.display = "none";


    } else {
        // User is signed out and redirected to
        loggedInUser.style.display = "none";
        loggingOut.style.display = "none";
        signInBtn.style.display = "block";
    }
});

//logging out 
loggingOut.onclick = function (e) {
    e.preventDefault(); //Preventing page refresh after button pressed
    firebase.signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
};