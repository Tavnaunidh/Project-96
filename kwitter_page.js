//YOUR FIREBASE LINKS

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
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
