const firebaseConfig = {
  apiKey: "AIzaSyDr_w7idgxVzZCoSgAfyJrE19q9x86cozY",
  authDomain: "https://vigilant-eureka-r46v99gr45x6f547v-5500.app.github.dev",
  databaseURL: "https://jackson-li---sals-strawberries-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "Jackson Li - Sals Strawberries",
  storageBucket: "Jackson Li - Sals Strawberries.firebasestorage.app",
  messagingSenderId: "615513125295",
  appId: "1:615513125295:web:4a5a7af46b468ab019ff5a"
  };
  firebase.initializeApp(firebaseConfig);

// This log prints the firebase object to the console to show that it is working.
// As soon as you have the script working, delete this log.
console.log("Firebase initialize finished:");
console.log(firebase);
