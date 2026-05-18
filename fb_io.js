/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/

var GLOBAL_user

function fb_authenticate() {
 if(_user){
    console.log("User Is Logged In")
    GLOBAL_user = _user;
  }else{
    console.log("User Is NOT Logged In - Starting the popup process")
    fb_popupLogin();
  }
}

function fb_popupLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
  GLOBAL_user = result.user; 
  console.log("User has logged in")
  });
}
  
  function fb_error() {
    // Don't forget your error handling!
  }
