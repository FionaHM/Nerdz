// clear the div
$('.add-questions').html("");  
// get the questions
$.get("/question", function(data) {
  // loop through the results and paint the dom
  for (var i = 0; i < data.length; i++){
     var id = i+1;
     $('.add-questions').append('<div class="questions" id="'+ data[i].id +'" data-category="' + data[i].category + '" data-question="' + data[i].id + '">' + data[i].question +'</div>');  
  }
});
// submit the answers
$('#submit').on("click", function(){
  var questionsArr =[];
  // loop through the answers and save to the database
  $('.questions').each(function(i, obj) {
    var id = i+1;

    var questionObj = {
      "score" : 3 + i, // DUMMY DATA
      "question_id" : $('#' + id).attr("data-question"),
      "category" :  $('#' + id).attr("data-category"),
      "user_id" :  1 // DUMMY DATA
    };   
    questionsArr.push(questionObj);
  });
  console.log(questionsArr);
  var questionsObj = { arr: questionsArr};

  $.post("/score", questionsObj);


})
