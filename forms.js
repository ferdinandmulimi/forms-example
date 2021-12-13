$(document).ready(function () {
    //submit, focus, val key word
    $("#blanks").submit(function () {
        //input
        var email = $(".email").val();
        var password = $(".password").val();
        var signin= $("input#radio[name=signin]:checked").val();
        console.log("Remember Me",signin)
        //output
        $(".email").append(email);
        $(".password").append(password);
       event.preventDefault(); 
    });
})
