// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('messages');
// listen for form submit

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    sameMessage(name,company,email,phone,message);

}

function getInputVal(id){
  return document.getElementById(id).value;
}

function sameMessage(name,company,email,phone,message){
 var newMessageRef = messagesRef.push();
 newMessageRef.set({
     name: name,
     company: company,
     email: email,
     phone: phone,
     message: message
 });   

}