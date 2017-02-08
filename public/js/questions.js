// clear the div

$('.add-questions').html("");

// send auth-token in header
// getCookie('auth_token');
console.log(getCookie('auth_token'));
$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
        xhr.setRequestHeader("Authorization", "Bearer " + getCookie('auth_token'));
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
        var carouselDiv = '<div class="questions item" id="' + data[i].id + '" data-category="' + data[i].category + '" data-question="' + data[i].id + '">' + '</div>';
        var carouselContainer = '<div id="container-"' + data[i].id + 'class="container">';
        var carouselCaption = '<div id="caption-"' + data[i].id + 'class="carousel-caption">' + data[i].question;
        var radios = '<label class="radio-inline"><input type="radio" name="optradio">1</label><label class="radio-inline"><input type="radio" name="optradio">2</label><label class="radio-inline"><input type="radio" name="optradio">3</label><label class="radio-inline"><input type="radio" name="optradio">4</label><label class="radio-inline"><input type="radio" name="optradio">5</label>';
        $('#add-questions').append(carouselDiv);
        carouselDiv.append(carouselContainer);
        carouselContainer.append(carouselCaption);
        carouselCaption.append(radios);
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
