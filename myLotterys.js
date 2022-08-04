import * as firebase from "./firebase.js"



const querySnapshot = await firebase.getDocs(firebase.collection(firebase.db, "Lottos"));
querySnapshot.forEach((doc) => {
    //siia et creatiks uue elemendi kuidas doc datast saab nime end date jne.
    console.log(`${doc.id} => ${doc.data()}`);
});