const firebaseConfig = {
  apiKey: "AIzaSyAgXy0z5Dlp4N8p8dcA7yAp5mHVMcTj0Nc",
  authDomain: "jackson-li---sals-strawberries.firebaseapp.com",
  databaseURL: "https://jackson-li---sals-strawberries-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jackson-li---sals-strawberries",
  storageBucket: "jackson-li---sals-strawberries.firebasestorage.app",
  messagingSenderId: "639207063451",
  appId: "1:639207063451:web:7c697021cb728efe00ab3e",
  measurementId: "G-7YZYM0HXYX"
};

  firebase.initializeApp(firebaseConfig);

// This log prints the firebase object to the console to show that it is working.
// As soon as you have the script working, delete this log.
console.log("Firebase initialize finished:");
console.log(firebase);
