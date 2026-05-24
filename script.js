console.log("Running Sal's Strawberries")

var uid;

function fb_write() {
    if (uid == null) {
        alert("Please Log In First!");
    }
    if (usersName == null || favoriteFruit == null || fruitQuantity == null) {
        alert("you must fill out all boxes before submitting the form!");
    }
}

function writeForm() {
        var favoriteFruit = document.getElementById("favoriteFruit").value;
        var userName = document.getElementById('userName').value;
        var fruitQuantity = document.getElementById('fruitQuantity').value;

        console.log(userName + " likes " + favoriteFruit);
    }

firebase.database().ref('/fruit').once(writeForm);


