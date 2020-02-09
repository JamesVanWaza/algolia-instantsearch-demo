var admin = require("firebase-admin");

var serviceAccount = require("/Users/jamesvanwazambpro/Dropbox/Security/JSON/algolia-instantsearch-demo2020-firebase-adminsdk-aaj97-ffd3ce659a.json");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://algolia-instantsearch-demo2020.firebaseio.com"
});
