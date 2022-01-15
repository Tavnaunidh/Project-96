
//ADD YOUR FIREBASE LINKS HERE

    // Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDKDmoyO4lvsD0IdbSNcew9MCCVwFIb9Vc",
      authDomain: "let-chat-web-app-eeec8.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-eeec8-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-eeec8",
      storageBucket: "let-chat-web-app-eeec8.appspot.com",
      messagingSenderId: "171656018993",
      appId: "1:171656018993:web:2f8c0413d4914fb727e910"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id= "Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}


