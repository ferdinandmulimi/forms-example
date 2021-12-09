//submit forms
$("blanks form").submit(function(event){
var email=$("input#email").val();
var password=$("input#password").val();
var signin=$("input#radio[name=signin]}")
//output
$("email").append(email);
$("password").append(password);
event.preventDefault();
})