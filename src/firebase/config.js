import firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
	apiKey: "AIzaSyCp1A63_9JjziOpOxfzsrurQhP7s9PWT8Y",
    authDomain: "holiday-highways.firebaseapp.com",
    databaseURL: "https://holiday-highways.firebaseio.com",
    projectId: "holiday-highways",
    storageBucket: "holiday-highways.appspot.com",
    messagingSenderId: "654958878313"
};
firebase.initializeApp(config);  

var  cloud = firebase.firestore();
// Disable deprecated features
cloud.settings({
  timestampsInSnapshots: true
});

cloud.collection("places").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
});
