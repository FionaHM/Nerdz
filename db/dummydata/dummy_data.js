/// Create Dummy Data
// add database_ flag for dummy data
var LocationARR_NA = ["ALA","AK","ARZ","AR", "CA", "CO", "CT","DE","FL","GA","HI",
"ID","IL","IN","IA","KS","KY","LA","ME", "MD", "MA", "MI","MN","MS","MO", 
"MT","NE", "NV", "NH", "NJ", "NM","NY","NC","ND","OH","OK","OR", "PA","RI",
"SC","SD","TN","TX","UT","VT", "VA","WA", "WV","WI","WY", "DC"];


var password = "test";
var email = "testagain";
var password = "test";
var email = "test@email";
var counter = 0;

var fs = require('fs');
var today = new Date();
var dd = today.getDate();
var username = ["Jessica", "Fiona", "Charles", "Mary", "Liam", "Mike"];
var cat = ["SCIENCE","CULTURE","ENGINEERING","TECHNOLOGY", "CULTURE"];
var nerd =["Master Nerd", "Super Nerd", "Nerd", "Senior Nerd", "Junior Nerd"];
var id = 0;
var LocationARR =[];

function readFile(){
return new Promise(function(resolve, reject) {
   fs.readFile('stripped2.csv', function (err, data) {
   if (err) {
      reject(err);
   }
   resolve(data.toString());
})

})
}
readFile().then(function(data){
	 // LocationARR.push(data);
	 // var LocationARRs1 = data.split("\n");
	 var newdata = data.replace(/\r?\n|\r/g,"");
 	var newdata2 = newdata.replace(/['"]+/g,"");
	 var LocationARRWorld = newdata2.split(",");
    LocationARR = LocationARRWorld.concat(LocationARR_NA);
	 // start at 1
	 // console.log(LocationARR[1]);
}).then(function(){
	
	// j = locations
	for (var j = 1; j < LocationARR.length-5; j++ ){
		if (LocationARR[j].length <= 3 ){
			console.log(LocationARR[j].length, LocationARR[j])
	
		//k = users
			for (var k = 0; k < username.length; k++){
				 id ++;
				 counter = Math.floor(Math.random() * 100000) + 1000;
				 randomNo = Math.floor(Math.random() * 5) + 0;
				 location =  LocationARR[j];
				 password =  password + counter;
				 email =  email + counter;
				 user = username[k] + counter;
				 updated_at = '2017-02-08 20:27:32';
				 created_at = '2017-02-08 20:27:32';
				 overall_category  = cat[randomNo];
				 nerd_level = nerd[randomNo];
				 dummy_flag = '1';
				// output string
				var insertString = id + ',' + user + ',' + email  +  ','  + password + ','  + location + ','  + overall_category + ','  + nerd_level + ','  + dummy_flag  + ','  + created_at + ','  + updated_at + '\n' ; 
				// reset user data
				password = "test";
				email = "test@email";
				counter = 0;
				fs.appendFile('loader.csv', insertString ,'utf8', function (err) {
				    if(err) {
				        return console.log(err);
				    }
				}); 

			}
		}
}
})
 
