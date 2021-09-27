
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBW8WuF0sGMBYzLu6FR4yBJPRYCAO-wsmk",
      authDomain: "classtest2-923bd.firebaseapp.com",
      databaseURL: "https://classtest2-923bd-default-rtdb.firebaseio.com",
      projectId: "classtest2-923bd",
      storageBucket: "classtest2-923bd.appspot.com",
      messagingSenderId: "23565043984",
      appId: "1:23565043984:web:4d8c5437d3ad7c769fbd95",
      measurementId: "G-2CN78EBKPL"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function addRoom()
      {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"});

                  localStorage.setItem("room_name", room_name);
                  
                  window.location = "kwitter_page.html";
             
                  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})
                  Room_names = childKey;

                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+Room_names+"  onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                 
                  function redirectToRoomName(name)
                  {
                        console.log(name);
                        localStorage.setItem("room_name", name);
                        window.location = "kwitter_page.html";
                  }
      }
                  function logout() {
                        localStorage.removeItem("user_name");
                        localStorage.removeItem("room_name");
                        window.location = "kwitter.html";
                  }
                  function send()
                  {
                        msg= document.getElemenbtById("msg").value;
                        fifebase.database().red(room_name).push({
                              name:osuer_name,
                              message:msg,
                              like:0
                        });

                        document.getElementById("msg").value = "";
                  }
      //End code;
      };});}

