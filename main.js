$(document).ready(function()
{
    var firebaseConfig = {
        apiKey: "AIzaSyA7hoOJfiQF_JX99e7doHy48Zpv_i6IKqk",
        authDomain: "projectrolnik2019.firebaseapp.com",
        databaseURL: "https://projectrolnik2019.firebaseio.com",
        projectId: "projectrolnik2019",
        storageBucket: "",
        messagingSenderId: "983291648629",
        appId: "1:983291648629:web:dca51e98e312a7ad"
    };
    firebase.initializeApp(firebaseConfig);

    $('#google').on("click", function(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            Toastify({
                text: "Logged in as "+result.user.email,
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
            }).showToast();
            sessionStorage.setItem("logged_in",result.user.email);
        }).catch(function(error) {
            Toastify({
                text: error.message,
                backgroundColor: "linear-gradient(to right, red, orange)"
            }).showToast();
        });
    });

    $('#fb').on("click", function(){
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            Toastify({
                text: "Logged in as "+result.user.email,
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
            }).showToast();
            sessionStorage.setItem("logged_in",result.user.email);
        }).catch(function(error) {
            Toastify({
                text: error.message,
                backgroundColor: "linear-gradient(to right, red, orange)"
            }).showToast();
        });
    });

    $('#twitter').on("click", function(){
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            Toastify({
                text: "Logged in as "+result.user.email,
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
            }).showToast();
            sessionStorage.setItem("logged_in",result.user.displayName);
        }).catch(function(error) {
            Toastify({
                text: error.message,
                backgroundColor: "linear-gradient(to right, red, orange)"
            }).showToast();
        });
    });
});