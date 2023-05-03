//Define my own google credentials
var googleClientId = "643398672506-a5k2fjtmk0hsljf90qli3jiibebalpok.apps.googleusercontent.com";
var googleClientSecret = "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";

//Change for local edit
var redirectURI = "http://localhost:5500/main.html"; 

//Change for hosted edit
// var redirectURI = "https://i481136.hera.fhict.nl/main.html"; 

//Scope for activity data like steps taken and distance traveled
var scope = "https://www.googleapis.com/auth/fitness.activity.read"; 

// Redirect the user to the authorization endpoint
var authorizationURl = "https://accounts.google.com/o/oauth2/auth?" +
"response_type=code" +
"&client_id=" + googleClientId +
"&redirect_uri=" + encodeURIComponent(redirectURI) +
"&scope=" + encodeURIComponent(scope);

window.location.href = authorizationURl;