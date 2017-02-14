$("#resetpassword").on("click", function() {
    // capture users email
    var userObj = {
            email: $('#recoveryemail').val()
        }
    // post to server
    $.post("/password", userObj, function(data) {})
})

$("#loggedinreset").on("click", function() {
    // capture users password
    var userObj = {
            newpassword: $('#resetpass').val(),
            confirmpassword: $('#confirmresetpass').val()
        }
    // post to server
    $.post("/password/reset/", userObj, function(data, success) {
        //
        if (data.message === "passwords don't match"){
            // log error message
            $('#err-message3').html('<h3 class="warning">' + data.message +'</h3>');

        } else if (success === "success"){
            // close modal
            $('.reset-modal').modal('hide');
        }
    })

})
