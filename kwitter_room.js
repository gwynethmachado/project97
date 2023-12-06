var firebaseConfig = {
      apiKey: "AIzaSyB__Uk9u7ZjnGS82L3s1mEQ2rtBWg4eRzM",
      authDomain: "kwitter-692ef.firebaseapp.com",
      databaseURL: "https://kwitter-692ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-692ef",
      storageBucket: "kwitter-692ef.appspot.com",
      messagingSenderId: "660535255018",
      appId: "1:660535255018:web:b4a456d3e32d53fe385c93"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Nmae - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
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
      window.location = "kwitter_page.html";
}