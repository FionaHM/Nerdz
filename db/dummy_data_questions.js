var fs = require('fs');
// 756 dummy users, 10 questions per user
// user_id, score, category, question_id, created_at, updated_at
var id = 0;
for (var k = 1; k <= 756; k++){ // 756 dummy users
	for (var i = 1; i <= 10; i++){ // 10 questions  per user
		id ++;
		// for (var j = 1; j <= 5; j++){ 
			// id, userid, score, qiestion, cat, up at , created at
			var insertString = id + ',' + k + ',' + k + ',' + i  + ',' +  'XXX'   + ','  + "2017-02-08 20:27:32"+ ','  + "2017-02-08 20:27:32\n" ;
			fs.appendFile('question.csv', insertString ,'utf8', function (err) {
				if(err) {
				    return console.log(err);
				}
			})
		// }

	}

}


// fs.appendFile('question.csv', insertString ,'utf8', function (err) {
// if(err) {
//     return console.log(err);
// }
// }); 


