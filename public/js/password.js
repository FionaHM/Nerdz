$("#resetpassword").on("click", function() {
    // capture users email

    var userObj = {
            email: $('#recoveryemail').val()
        }
        // store the email for use when resetting password
        // createCookie("user_email", $("#existing-user-email").val(), 0);
    $.post("/password", userObj, function(data) {
        //
        console.log(data);
    })

})

$("#loggedinreset").on("click", function() {
    // capture users email

    var userObj = {
            // email: $('#updateemail').val(),
            password: $('#confirmresetpass').val()
        }
        // store the email for use when resetting password
        // createCookie("user_email", $("#existing-user-email").val(), 0);
    $.post("/password/reset/", userObj, function(data) {
        //
        console.log(data);
    })

})
