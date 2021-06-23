import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBGAQ1P5y612ndgD0cH2PUJ_itCHi19jpQ",
    authDomain: "studioz-auth.firebaseapp.com",
    databaseURL: "https://studioz-auth-default-rtdb.firebaseio.com",
    projectId: "studioz-auth",
    storageBucket: "studioz-auth.appspot.com",
    messagingSenderId: "283010654704",
    appId: "1:283010654704:web:5daa59447e13fe4f03bd35",
    measurementId: "G-9GLXQS02GV"
};
firebase.initializeApp(config);
export default firebase;