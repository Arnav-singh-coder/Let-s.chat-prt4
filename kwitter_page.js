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
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });
      document.getElementById("msg").value="";


}



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
