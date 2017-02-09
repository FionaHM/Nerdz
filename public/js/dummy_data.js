/// Create Dummy Data
// add database flag for dummy data
var LocationARR = ["ALA","AK","ARZ","AR", "CA", "CO", "CT","DE","FL","GA","HI",
"ID","IL","IN","IA","KS","KY","LA","ME", "MD", "MA", "MI","MN","MS","MO", 
"MT","NE", "NV", "NH", "NJ", "NM","NY","NC","ND","OH","OK","OR", "PA","RI",
"SC","SD","TN","TX","UT","VT", "VA","WA", "WV","WI","WY", "DC"];


var password = "test";
var email = "testagain@";
var username = "JessicaHH";

for (var j = 0; j < LocationARR.length; j++ ){
	for (var i = 0; i < 100; i++){
		var registerObj = {
		  location: LocationARR[j],
		  password: password + i,
		  email: email + i,
		  username: username + i
		}

		$.post('/newuser', registerObj, function(data, status, err) {
 
	    })
	    .fail(function(xhr, status, error) {
	        // captures error so now we can handl
	        // alert('Error, please try again');
	    })

	}
}

