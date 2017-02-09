var registerObj = {
  location: LocationARR[i],
  password: password,
  email: email,
  username: username
}

$.post('/newuser', registerObj, function(data, status, err) {

      console.log(data);
      if (status === "success") {

          createCookie("auth_token", data, 0);
          createCookie("user_email", $("#new-user-email").val(), 0);
          // move to next page - this will error if user doesnt have perms
          window.location.replace("../questionpage");

      } 
    })
    .done(function(msg){  
      console.log(msg)
    })
    .fail(function(xhr, status, error) {
        // captures error so now we can handle
        $('#err-message2').html(xhr.responseText);
        console.log(xhr.responseText, xhr.statusText);
        alert('Error, please try again');
      })
  })


 // submit the answers
$('#submit').on("click", function() {
    var questionsArr = [];
    // loop through the answers and save to the database
    $('.questions').each(function(i, obj) {
        console.log($('#' + id).attr("data-category"));
        // split the category and insert multiple rows with score prorated
        var id = i + 1;
        var catArr = $('#' + id).attr("data-category").split("/");
        console.log(catArr);
        for (var j = 0; j < catArr.length - 1; j++) {
            var score = (5 / (catArr.length - 1)); // 5 is DUMMY DATA
            var questionObj = {
                "score": score,
                "question_id": $('#' + id).attr("data-question"),
                "category": catArr[j],
                "user_id": 1 // DUMMY DATA
            };
            questionsArr.push(questionObj);
        }
    });
    console.log(questionsArr);
    var questionsObj = { arr: questionsArr };

    $.post("/score", questionsObj);


})