var fs = require('fs');

var CatArr = ["SCIENCE","CULTURE","ENGINEERING","TECHNOLOGY", "CULTURE"];

// 756 dummy users, 10 questions per user
// user_id, score, category, question_id, created_at, updated_at
var id = 0; // update id
// do for first 200 then remaining in 200 to 756
for (var k = 600; k < 756; k++){ // 756 dummy users
		var count2s = 0;
		var count3s = 0;
	for (var i = 1; i <= 25; i++){ // 25 questions  per user
		var twoArr = [2,3,4,9,12,13, 15, 16, 17,18,20,23];
		var threeArr = [1,6,8,25];

		if (twoArr.includes(i)){
			score = ( Math.floor(Math.random() * 5) + 1)/2;
			// put i entries in the score table
			
			for (var l = 1; l <= 2; l++){
				id ++;
				// console.log(i,l, count2s);
				var catID =  ( Math.floor(Math.random() * 4) + 0);
				var category = CatArr[catID];
				// id,score,category,question_id,user_id,created_at,updated_at
				var insertString = id + ',' + score + ',' + category +',' + i  +  ',' + k + ','  + "2017-02-08 20:27:32"+ ','  + "2017-02-08 20:27:32\n" ;
				fs.appendFile('scores.csv', insertString ,'utf8', function (err) {
					if(err) {
					    return console.log(err);
					}
				})

			}
			count2s++;
			// twoArr.splice(0);
			// console.log(i);

		} 
		else if (threeArr.includes(i)){

			score = ( Math.floor(Math.random() * 5) + 1)/3;
		
			for (var l = 1; l <= 3; l++){
				id ++;
				var catID =  ( Math.floor(Math.random() * 4) + 0);
				var category = CatArr[catID];
				var insertString = id + ',' + score + ',' + category +',' + i  +  ',' + k + ','  + "2017-02-08 20:27:32"+ ','  + "2017-02-08 20:27:32\n" ;
				fs.appendFile('scores.csv', insertString ,'utf8', function (err) {
					if(err) {
					    return console.log(err);
					}
				})
			}
			count3s++;
		} else {
			id ++;
			score = ( Math.floor(Math.random() * 5) + 1);
			var catID =  ( Math.floor(Math.random() * 4) + 0);
			var category = CatArr[catID];
			var insertString = id + ',' + score + ',' + category +',' + i  +  ',' + k + ','  + "2017-02-08 20:27:32"+ ','  + "2017-02-08 20:27:32\n" ;
			fs.appendFile('scores.csv', insertString ,'utf8', function (err) {
				if(err) {
				    return console.log(err);
				}
			})
		// console.log(i);
		}

		// for (var j = 1; j <= 5; j++){ 
			// id, userid, score, qiuestion, up at , created at

		// }


	}

}


// fs.appendFile('question.csv', insertString ,'utf8', function (err) {
// if(err) {
//     return console.log(err);
// }
// }); 


