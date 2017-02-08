// clear the div

$('.add-questions').html("");

// send auth-token in header
// getCookie('auth_token');
console.log(getCookie('auth_token'));
  $.ajaxSetup({
      beforeSend: function (xhr)
      {
         xhr.setRequestHeader("Accept","application/vvv.website+json;version=1");
         xhr.setRequestHeader("Authorization","Bearer "+ getCookie('auth_token'));
      }
  });


//          var token = window.localStorage.getItem('token');

// if (token) {
//   $.ajaxSetup({
//     headers: {
//       'x-access-token': token
//     }
//   });
// }
// get the questions
$.get("/question", function(data) {
    // loop through the results and paint the dom
    for (var i = 0; i < data.length; i++) {
        var id = i + 1;
        $('.add-questions').append('<div class="questions" id="' + data[i].id + '" data-category="' + data[i].category + '" data-question="' + data[i].id + '">' + data[i].question + '</div>');
    }
});
// submit the answers
$('#submit').on("click", function() {
    var questionsArr = [];
    // loop through the answers and save to the database
    $('.questions').each(function(i, obj) {
        var id = i + 1;

        var questionObj = {
            "score": 3 + i, // DUMMY DATA
            "question_id": $('#' + id).attr("data-question"),
            "category": $('#' + id).attr("data-category"),
            "user_id": 1 // DUMMY DATA
        };
        questionsArr.push(questionObj);
    });
    console.log(questionsArr);
    var questionsObj = { arr: questionsArr };

    $.post("/score", questionsObj);


})

// copied from stackoverflow.com
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
