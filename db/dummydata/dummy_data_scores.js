var fs = require('fs');

// read the category data file - dump from database categories table 
function readFile(){
	return new Promise(function(resolve, reject) {
		fs.readFile('categories.csv', function (err, data) {
		   if (err) {
		      reject(err);
		   }
		   resolve(data.toString());
		})
	})
}

readFile().then(function(data){
	var catArr = [];
	dataArr = data.split("\n");
	// loop through to split each row
	for (var i=0; i < dataArr.length; i++){
		var tmpArr = dataArr[i].split(",");
		catArr.push(tmpArr);
	}
	console.log(catArr[0][0], catArr[0][1], catArr[0][2]);
	return catArr;
}).then(function(catArr){
	// 756 dummy users, 10 questions per user
	// user_id, score, category, question_id, created_at, updated_at
	var id = 0; // update id
	var	count = 0;
	// do for first 100 then remaining in 100 to 756
	for (var k = 1; k < 100; k++){ // 756 dummy users

		for (var i = 0; i < 47; i++){ // 47 categories questions  per user
			// var twoArr = [2,3,4,9,12,13, 15, 16, 17,18,20,23];
			// var threeArr = [1,6,8,25];

			// if (twoArr.includes(i)){

				// for (l = 0; l < CatArr[0][i].length-1; l++){

					score = ( Math.floor(Math.random() * 5) + 1)/2;
					id ++;
					// randomly assign a 
					// var catID =  ( Math.floor(Math.random() * 4) + 0);
					var category = catArr[i][2];
					var question = catArr[i][1];
					// var id = catArr[i][0];
					// console.log("category", category, "question", question, "id"  );
					// id,score,category,question_id,user_id,created_at,updated_at
					var insertString = id + ',' + score + ',' + category +',' + question  +  ',' + k + ','  + "2017-02-08 20:27:32"+ ','  + "2017-02-08 20:27:32\n" ;
					fs.appendFile('scores.csv', insertString ,'utf8', function (err) {
						if(err) {
						    return console.log(err);
						}
					})
				// }
				// put i entries in the score table
				
				// for (var l = 1; l <= 2; l++){
				

				// }
				// count2s++;
				// twoArr.splice(0);
				// console.log(i);

			// } 
			// else if (threeArr.includes(i)){

			// 	score = ( Math.floor(Math.random() * 5) + 1)/3;
			
			// 	for (var l = 1; l <= 3; l++){
			// 		id ++;
			// 		var catID =  ( Math.floor(Math.random() * 4) + 0);
			// 		var category = CatArr[catID];
			// 		var insertString = id + ',' + score + ',' + category +',' + i  +  ',' + k + ','  + "2017-02-08 20:27:32"+ ','  + "2017-02-08 20:27:32\n" ;
			// 		fs.appendFile('scores.csv', insertString ,'utf8', function (err) {
			// 			if(err) {
			// 			    return console.log(err);
			// 			}
			// 		})
			// 	}
			// 	count3s++;
			// } else {
			// 	id ++;
			// 	score = ( Math.floor(Math.random() * 5) + 1);
			// 	var catID =  ( Math.floor(Math.random() * 4) + 0);
			// 	var category = CatArr[catID];
			// 	var insertString = id + ',' + score + ',' + category +',' + i  +  ',' + k + ','  + "2017-02-08 20:27:32"+ ','  + "2017-02-08 20:27:32\n" ;
			// 	fs.appendFile('scores.csv', insertString ,'utf8', function (err) {
			// 		if(err) {
			// 		    return console.log(err);
			// 		}
			// 	})
			// // console.log(i);
			// }

			// // for (var j = 1; j <= 5; j++){ 
			// 	// id, userid, score, qiuestion, up at , created at

			// }


	}

}

})
// fs.appendFile('question.csv', insertString ,'utf8', function (err) {
// if(err) {
//     return console.log(err);
// }
// }); 


