// clear the div
$('.add-questions').html("");  
// get the questions
$.get("/question", function(data) {
  // loop through the results and paint the dom
  for (var i = 0; i < data.length; i++){
     var id = i+1;
     $('.add-questions').append('<div class="questions" id="'+ data[i].id +'" data-catId="' + data[i].category_id + '" data-question="' + data[i].id + '">' + data[i].question +'</div>');  
  }
});
// submit the answers
$('#submit').on("click", function(){
  // loop through the answers and save to the database
  $('.questions').each(function(i, obj) {
    var id = i+1;
    var questionObj = {
      "score" : 3, // DUMMY DATA
      "question_id" : $('#' + id).attr("data-question"),
      "category_id" :  $('#' + id).attr("data-catId"),
      "user_id" :  id // DUMMY DATA
     };
     $.post("/score", questionObj);
     // tried to post array but server did not like it
  });
})
