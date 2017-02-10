$("#resetpassword").on("click", function() {
    // capture users email
    
    var userObj = {
      email: $('#email').val()
    } 
    

    $.post("/password", userObj, function(data){
      //
      console.log(data);
    })
  
})