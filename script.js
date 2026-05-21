console.log("Running Sal's Strawberries")

let favoriteFruit;
let userName;
let fruitQuantity;
let uid;

function fb_write() {
console.log("Test");
firebase.database().ref('/').set(
    {
      message: 'Test'
    }
  )
}


function writeForm() {
    if (uid == null) {
        alert("Please Log In First!");
    } else {
        favoriteFruit = document.getElementById("favoriteFruit").value;
        userName = document.getElementById('userName').value;
        fruitQuantity = document.getElementById('fruitQuantity').value;
    }
}


