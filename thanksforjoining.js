import * as firebase from "./firebase.js"
const docRef = firebase.doc(firebase.db, "Lottos", lotterysName);
const docSnap = await firebase.getDoc(docRef);


const joinLotteryName = document.getElementById("thanksLotterName");
joinLotteryName.innerHTML + docSnap.data().lotterysName;


/*import * as firebase from "./firebase.js"

const docRef = firebase.doc(firebase.db, "Lottos", lotterysName);
const docSnap = await firebase.getDoc(docRef);

const joinLotteryName = document.getElementById("thanksLotterName")

joinLotteryName.innerText + "this shit";*/