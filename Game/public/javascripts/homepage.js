// $(document).ready(function () {
//helper function to make a random string of size length, this is to simulate a new user instead of etering new datsa each time
//take from:
//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

function makeid(length) {

    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}
function login(){
    userin();
    passin();
}

var username;
var password;

function save(){
    username = $('#username').val();
    password = $('#password').val();
    
    console.log(username);
    console.log(password);

    $('#username').val('');
    $('#password').val('');

}
module.exports = {
    username,
    password
}

    //var username = makeid(5);
    //var username = "username";

    //var password = makeid(5);
    //var password = "password"




