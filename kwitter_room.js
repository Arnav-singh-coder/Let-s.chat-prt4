// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD8OeAxFSmIz_iSL2HWAJnpU_6odVnfh2k",
      authDomain: "kwitter-6d22e.firebaseapp.com",
      databaseURL: "https://kwitter-6d22e-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d22e",
      storageBucket: "kwitter-6d22e.appspot.com",
      messagingSenderId: "378373172811",
      appId: "1:378373172811:web:a831a4855ec68f9499e7ce"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();



function addroom(){
      var room_name=document.getElementById("room_name").value 
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
          
      }
      function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";


}