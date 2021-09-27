function addUser() {
    user_name = document.getElementById("user_name").Value;
    firebaseConfig.databaseURL().ref("/").child(user_name).update({
        purpost : "adding user"
    });
}