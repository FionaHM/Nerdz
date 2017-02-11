// clear the div

// $('.add-questions').html("");

// send auth-token in header
// getCookie('auth_token');
// console.log(getCookie('auth_token'));

//Interval controls speed of carousel. Wrap: false stops it from cycling back to first question
$('#myCarousel').carousel({
    interval: 8000,
    wrap: false
});

$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
        xhr.setRequestHeader("Authorization", "Bearer " + getCookie('auth_token'));
    }
});

// get the questions
$.get("/question", function(data) {

    // loop through the results and paint the dom
    for (var i = 0; i < data.length; i++) {
        var category = '';
        // pull out each category and append to the question
        for (var j = 0; j < data[i].Categories.length; j++) {
            console.log(data[i].Categories[j].category_name);
            category += data[i].Categories[j].category_name + "/";
        }
        // console.log(category);
        var id = i + 1;
        //adds the little circle carousel-indicators to the bottom of the carousel
        var li = '<li id="li-' + i + '"data-target="#myCarousel" data-slide-to="' + i + '"></li>';
        $('.carousel-indicators').append(li);
        //first slide selected by default
        $('#li-' + 0).addClass("active");

        //Builds up a carousel item for each question
        var carouselDiv = '<div class="questions item" id="' + data[i].id + '" data-category="' + category + '" data-question="' + data[i].id + '">' + '</div>';
        var carouselContainer = '<div class="container" id="container-' + data[i].id + '">';
        var carouselCaption = '<div class="carousel-caption" id="caption-' + data[i].id + '">' + '<h1>Question ' + data[i].id + '</h1><br>' + '<h4>' + data[i].question;
        // var radios = '<br><label class="radio-inline"><input type="radio" value="1" name="optradio-' + data[i].id + '">1</label><label class="radio-inline"><input type="radio" value="2" name="optradio-' + data[i].id + '">2</label><label class="radio-inline"><input checked type="radio" value="3" name="optradio-' + data[i].id + '">3</label><label class="radio-inline"><input type="radio" value="4" name="optradio-' + data[i].id + '">4</label><label class="radio-inline"><input type="radio" value="5" name="optradio-' + data[i].id + '">5</label>';

        // 'class="questions " id="' + data[i].id + '" data-category="' + category + '" data-question="' + data[i].id + '
        var radios = '<br><br><br><input checked type="radio" class="radio" id="radio-' + data[i].id + '-1" value="1" name="optradio-' + data[i].id + '" /><label for="radio-' + data[i].id + '-1" class="animated bounce"><h2 id="no1"></h2></label><input type="radio" class="radio" id="radio-' + data[i].id + '-2" value="2" name="optradio-' + data[i].id + '" /><label for="radio-' + data[i].id + '-2" class="animated bounce"></label><input type="radio" class="radio" id="radio-' + data[i].id + '-3" value="3" name="optradio-' + data[i].id + '" /><label check for="radio-' + data[i].id + '-3" class="animated bounce"></label><input type="radio" class="radio" id="radio-' + data[i].id + '-4" value="4" name="optradio-' + data[i].id + '" /><label for="radio-' + data[i].id + '-4" class="animated bounce"></label><input type="radio" class="radio" id="radio-' + data[i].id + '-5" value="5" name="optradio-' + data[i].id + '" /><label for="radio-' + data[i].id + '-5" class="animated bounce"></label>';


        $('#add-questions').append(carouselDiv);
        $('#' + data[i].id).append(carouselContainer);
        //displays first question by default when loaded
        $('#' + data[0].id).addClass("active");
        //carouselCaption contains the Question number and the Question
        $('#container-' + data[i].id).append(carouselCaption);
        //radio buttons added for each question
        // $('#caption-' + data[i].id).append('<div id="radios-' + data[i].id + '">');
        // $('#radios-' + data[i].id).append(radios);
        $('#caption-' + data[i].id).append(radios);

    }
    var lastLi = '<li id="li-' + last + '"data-target="#myCarousel" data-slide-to="' + last + '"></li>';

    var last = (data.length + 1);
    var lastDiv = '<div class="questions item" id="' + last + '" data-category="' + category + '" data-question="' + last + '">' + '</div>';
    var lastContainer = '<div class="container" id="container-' + last + '">';
    var finalMessage = 'Click the button to see your results!';
    var submitButton = '<form action="" method="POST"><button id="sendscores1">Submit Answers</button></form>';
    var lastCaption = '<div class="carousel-caption" id="caption-' + last + '">' + '<h1>' + finalMessage + '<br>' + submitButton;

    $('.carousel-indicators').append(lastLi);
    $('#add-questions').append(lastDiv);
    $('#' + last).append(lastContainer);
    $('#container-' + last).append(lastCaption);

}).done(function(msg) {
    console.log(msg)
}).fail(function(xhr, status, error) {
    // captures error so now we can handle
    console.log(xhr.responseText, xhr.statusText);
    // redirect to login
    window.location.replace("../");
    // alert('Error, please try again');
})

// submit the answers
$('#sendscores').on("click", function(event) {
    event.preventDefault();
    var questionsArr = [];
    // loop through the answers and save to the database
    $('.questions').each(function(i, obj) {
        // console.log($('#' + id).attr("data-category"));
        // split the category and insert multiple rows with score prorated
        var id = i + 1;
        var catArr = $('#' + id).attr("data-category").split("/");
        // console.log(catArr);
        // var radioButtonId = '#radio-' + data[i].id + '-1';
        for (var j = 0; j < catArr.length - 1; j++) {
            // console.log(catArr.length);
            // var score = ($(radioButtonId).val() / (catArr.length - 1)); // 5 is DUMMY DATA
            var score = (5 / (catArr.length - 1)); // 5 is DUMMY DATA

            console.log("score", score);
            var questionObj = {
                "score": score,
                "question_id": $('#' + id).attr("data-question"),
                "category": catArr[j],
                // "user_id": 1 // DUMMY DATA
            };
            questionsArr.push(questionObj);
        }
    });
    //
    var questionsObj = { arr: questionsArr };
    //
    $.post("/score", questionsObj, function() {

        window.location.replace("../graph");

    });


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
