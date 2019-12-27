var admin = require("firebase-admin");

var serviceAccount = require("/Users/jamesvanwazambpro/Dropbox/Security/JSON/algolia-instantsearch-demo2020-firebase-adminsdk-aaj97-ffd3ce659a.json");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://algolia-instantsearch-demo2020.firebaseio.com"
});

var firebase = require("firebase");

// Project Configuration
var firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyBxmP25EduT2jJXo_oWbb6C8754Oy-mLRQ",
    authDomain: "algolia-instantsearch-demo2020.firebaseapp.com",
    databaseURL: "https://algolia-instantsearch-demo2020.firebaseio.com",
    projectId: "algolia-instantsearch-demo2020",
    storageBucket: "algolia-instantsearch-demo2020.appspot.com",
    messagingSenderId: "106737670995",
    appId: "1:106737670995:web:992ce2954ae4345e6fdfa6",
    measurementId: "G-C2T4RTG3ZB"
  };
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
