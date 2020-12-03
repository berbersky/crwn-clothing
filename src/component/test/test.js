import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
// firestore
// 	.collection("users")
// 	.doc("9QsDPEr9Y4nGeHUMQMHF")
// 	.collection("cartItems")
//     .doc("sODS9bY7gMJ127Ny1I4S");

firestore.doc("/users/9QsDPEr9Y4nGeHUMQMHF/cartItems/sODS9bY7gMJ127Ny1I4S");
