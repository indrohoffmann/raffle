//Selleks et sisse logitud kasutaja näeks home lingile vajutades hoopis my lotterys

//et kasutada firebase funktsioone firebase.js iset
/*import * as firebase from "./firebase.js"

var homeLink = document.getElementById("homeLink")

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.getAuth(firebase.app);

firebase.onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        homeLink.onclick = function (e) {
            e.preventDefault(); //Preventing page refresh after button pressed
            window.location.replace("mylotterys.html");
        };


    } else {

    }
});