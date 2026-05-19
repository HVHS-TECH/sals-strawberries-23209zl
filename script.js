
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const name = document.getElementById('name').value;
    const fruitQuantity = document.getElementById('fruitQuantity').value;

    firebase.database().ref('/').set(
    
    )
}