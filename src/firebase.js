import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBHyP_ZwtYRLZDkc9PFMiWwkXCXCi0KXM0",
    authDomain: "job-search-stats.firebaseapp.com",
    databaseURL: "https://job-search-stats.firebaseio.com",
    projectId: "job-search-stats",
    storageBucket: "job-search-stats.appspot.com",
    messagingSenderId: "860100249959"
  };
  firebase.initializeApp(config);
  export default firebase;
