console.log("Running Sal's Strawberries")

var uid;

function fb_write() {
    if (uid == null) {
        alert("Please Log In First!");
        return;
    }

    var favoriteFruit = document.getElementById("favoriteFruit").value;
    var userName = document.getElementById("name").value;
    var fruitQuantity = document.getElementById("fruitQuantity").value;

    if (!userName || !favoriteFruit || !fruitQuantity) {
        alert("You must fill out all boxes before submitting the form!");
        return;
    }

    firebase.database().ref('/users/' + GLOBAL_user["uid"]).set({
        name: userName,
        fruit: favoriteFruit,
        quantity: fruitQuantity
    });

    console.log("Data sent to Firebase");
}



