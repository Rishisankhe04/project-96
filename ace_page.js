
var firebaseConfig = {
    apiKey: "AIzaSyB0YmuZyj8g3NDDRvYdnJZOXnwkTrSzg-w",
    authDomain: "chat-a8d40.firebaseapp.com",
    databaseURL: "https://chat-a8d40-default-rtdb.firebaseio.com",
    projectId: "chat-a8d40",
    storageBucket: "chat-a8d40.appspot.com",
    messagingSenderId: "500237630786",
    appId: "1:500237630786:web:3bb78800715eac84329cdb",
    measurementId: "G-PSS07TZH80"
  };
  
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+ user_name +" !";
   function addroom(){
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="ace_chat.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room_names"+Room_names);
    row="<div class='room_name' id='"+Room_names+"' onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML +=row;
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="ace_chat.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}