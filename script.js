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

    firebase.database().ref('/favouriteFruit').push({
        name: userName,
        fruit: favoriteFruit,
        quantity: fruitQuantity
    });

    console.log("Data sent to Firebase");
}

function writeForm(snapshot) {
    var data = snapshot.val();
    console.log(data);

    for (let key in data) {
        let item = data[key];
        console.log(item.name + " likes " + item.fruit);
    }
}

firebase.database().ref('/favouriteFruit').on('value', writeForm);


