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
        var category = '';
        // pull out each category and append to the question
        for (var j = 0; j < data[i].Categories.length; j++){
            console.log(data[i].Categories[j].category_name);
            category += data[i].Categories[j].category_name + "/";
        }
        console.log(category);
        var id = i + 1;
        $('.add-questions').append('<div class="questions" id="' + data[i].id + '" data-category="' + category + '" data-question="' + data[i].id + '">' + data[i].question + '</div>');
    }
});
// submit the answers
$('#submit').on("click", function() {
    var questionsArr = [];
    // loop through the answers and save to the database
    $('.questions').each(function(i, obj) {
        console.log( $('#' + id).attr("data-category"));
        // split the category and insert multiple rows with score prorated
        var id = i + 1;
        var catArr = $('#' + id).attr("data-category").split("/");
        console.log(catArr);
        for (var j = 0; j < catArr.length-1; j++){
            var score = (5 / (catArr.length-1)); // 5 is DUMMY DATA
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