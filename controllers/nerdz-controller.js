var db = require('../models');
var methodOverride = require("method-override");
var path = require("path");
var passwordHash = require("password-hash");
var expressJWT = require("express-jwt");
var jwt = require("jsonwebtoken");
var session = require("express-session");

//**** Functions ***//

function router(app){
	// this is cookie setting data - for client side cookies
	// httpOnly makes cookie data a bit more secure against from other scripts
	var cookieSecret = process.env.COOKIE_SECRET ||  "supersecretcookies";
	app.use(session({secret: cookieSecret, cookie: { httpOnly : true,  maxAge: 60000 }, resave: false, saveUninitialized: false}));
	// Override with POST having ?_method=PUT or DELETE
	app.use(methodOverride("_method"));

	// this is the function to capture and verify the incoming java web token - 
	// this needs to be place at the start of each protected api route
	// tokens are created at login
	function getToken(req, res) {
		// set token as null initially
		var token = null;
		// checks the request header for the token
	    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
	        token = req.headers.authorization.split(' ')[1];
	    } 
	    // remove for now as token should be in header
	    // else if (req.query && req.query.token) {
	    //   token = req.query.token;
	    // }
	     else {
	    	token = null;
	    }
		// use jwt verify to verify the token (symmetric - synchronous)
		// must use the same secret phrase as was used to generate token initally
		var secret = process.env.JWT_SECRET ||  'putthisinaseparatefile';
		// verify the token
		jwt.verify(token, secret , function(err, decoded) {
		    if(err) {
		    	// send an error request and deny access
		        return res.status(401).send({message: 'invalid_token'});
		    } else {
		    	// pass the decoded token for use by the api
		    	return decoded;
		    }
		});

		; 
	}

function verifyPassword(password, data, res){
	// verify that the password is correct
	if (passwordHash.verify(password, data.password)){
	 	// generate the token using a secret phrase
		returnToken(data, res);
	} else {
    	res.status(400).send("Invalid Password");
    	return;
    	// ***** to be completed once app is working as a unit
	}
}

function returnToken(data, res){
    var secret = process.env.JWT_SECRET || "putthisinaseparatefile";
	// token expires in 30 mins 
	var myToken = jwt.sign( { id: data.id, email: data.email, username: data.username}, secret, { expiresIn: 60 * 30 });
 	// this token is stored as a cookie on client and sent in AJAX Header
  	res.json(myToken);
  	return;
}
	//****HTML ROUTES*******//

	//  This is a GET function for the root path "/"" to serve 
	// the main page, index.html.  This root path is not authenticated 
	// with a json web token. 
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + "/../public/index.html"));
	})

	// not sure if this route will be used in final app
	app.get('/login', function(req, res){
		res.sendFile(path.join(__dirname + "/../public/login.html"));
	})

	// used to generate use charts based on test scores
	app.get('/graph', function(req, res){
		res.sendFile(path.join(__dirname + "/../public/graphs.html"));
	})

	//*** POST ROUTES **//
	// create a new user
	app.post('/newuser', function (req, res) {
		// capture the name of the user
		var username = req.body.username.toLowerCase();
		var email = req.body.email.toLowerCase();
		// hash the password before saving
		var password = passwordHash.generate(req.body.password);
		var location = req.body.location; 
		// unique constraint on username and email
		// checkif user exists
		db.User.findOrCreate({
			where: { username: username, email: email, password: password, location: location }
	    }).spread(function(data, created) {
	    	// if found verify that password is correct and generate token if 
	    	// console.log("data", data);
	    	// console.log("created", created);
	    	if (created){  // should be true if newly created
    			returnToken(data, res);
	    	} 
	    	// else {
	    	// 	verifyPassword(password, data, res);
	    	// }

		}).catch(function(err){
			// console.log(err);
			message = err.errors[0].message;
			return res.status(401).send(message);
			// res.json(err.errors[0].message);
		})
	})

	// route to authenticate an existing user
	app.post('/existinguser', function(req, res){
		var email = req.body.email.trim().toLowerCase();
		var password = req.body.password.trim();
		// some validation
		if (!email){
			res.status(400).send("email required");
			return;
		}
		if (!password){
			res.status(400).send("password required");
			return;
		}
		// query the database to find the user
		// email is used as unique identifier
		db.User.findOne({
			where: { email: email }
	    }).then(function(data) {
	    	// if no data returned
	    	if (data === null){
	    		res.status(400).send("User Not Found");
	    		return;
	    	}
	    	// compare the password entered to the stored password hash
		    else {
		    	if (passwordHash.verify(password, data.password)){
		     	// generate the token using a secret phrase
		     	var secret = process.env.JWT_SECRET || "putthisinaseparatefile"
		     	// token current set to expire in one hour
		     	// user id, username and email stored in the payload of the token
		     	// this is needed for other apis to get user specific data
		     	var myToken = jwt.sign( { id: data.id, email: data.email, username: data.username}, secret , { expiresIn: 60 * 30 });
		     	console.log(myToken);
		     	// send back the token 
		     	// store it as a cookie on client - this will then be
		     	//  sent back with user requests as Bearer in the AJAX Header
		  		res.json(myToken);
			    } else {
			    	res.status(400).send("Invalid Password");
			    	return;
			    	// ***** to be completed once app is working as a unit
			    }
			}

		}).catch(function(err){
			res.status(400).send("Database Error");
			return;
			// ***** to be completed once app is working as a unit
			// res.redirect("/");
		})
	})


	
	// gets all questions from the database - with multiple categories per questiob
	app.get('/questionpage', function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/questions.html"), function(err) {
        	console.log(__dirname + "/../public/questions.html");
    	});
	})

	// app.get('/questionnewpage', function (req, res) {
	// 	res.sendFile(path.join(__dirname + "/../public/questionsnew.html"), function(err) {
 //        	console.log(__dirname + "/../public/questionnew.html");
 //    	});
	// })
	// gets all questions from the database  - with one category per question
	// app.get('/question', function (req, res) {
	// 	// getToken(req, res);
	// 	// Query the database
	// 	db.Question.findAll({}).then(function(data){
	// 		res.json(data)
	// 	}).catch(function(err){
	// 		res.redirect("/");
	// 	})
	// })

	// gets all questions from the database - with multiple categories per questiob
	app.get('/question', function (req, res) {
		// getToken(req, res);
		// Query the database
		db.Question.findAll({
			include: [db.Category]
		}).then(function(data){
			// pull out each category and append to the question
			res.json(data)
		}).catch(function(err){
			res.redirect("/");
		})
	})

   	app.get('/aggregatescore/', function (req, res) {
   		// no jwt here
   		var userid = req.params.id;  // passed in from client
   		// get aggregate score all
   		aggregates(req, res, userid);
	})

	app.get('/aggregatescore/user/:id', function (req, res) {
   		getToken(req, res); //code for token validation 
   		// get aggregate score for a user
   		var userid = req.params.id;  // passed in from client
   		aggregates(req, res, userid);
	})

	function aggregates(req, res, userid){
		var total = 0;
   		var queryString = "select sum(a.score) as total from rawscores as a, users as b where b.id = a.user_id";
   		// if there is a userid sent then append it to the query
   		if (userid !== undefined) {
   			queryString += " and a.user_id = " + userid;
   		}
   		// select b.username, sum(a.score), a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1 group by a.category
		db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT})
  		.then(function(results) {
  			// gives percentage
  			total = results[0].total;	
  			// this give back raw scores
	   		queryString = "select b.username, sum(a.score) as total_score, a.category from rawscores as a, users as b where b.id = a.user_id group by  b.username, a.category";
	   		// user id gives raw scores
			if (userid !== undefined) {
   				queryString = "select b.username, sum(a.score) as total_score, a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = "+ userid + " group by a.category";
   			}
			db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT})
	  		.then(function(results) {
	  			// put results into format for charts - per jess example
  				var resultsObj = { "name" : results[0].username };
  				var outputArr = [];
  				var user = results[0].username;
  				var resultsArr = [];
  				resultsArr.push(resultsObj);
  				var control = 0;
  				var j =1;
  				for (var i = 0; i < results.length; i++){

  					if ( user === results[i].username){
  						resultsArr.push({total_score: results[i].total_score,
  					  category: results[i].category})
						resultsObj = { [j] : resultsArr };
						// resultsObj[j] = resultsArr;
						console.log(resultsObj);
  					} else {
  						
  						outputArr.push(resultsObj);
  						j= j+1;
  						// resultsObj = {};
  						resultsArr = [];
  						// resultsObj = { "num" : resultsArr };
  						user = results[i].username;
  						resultsObj = { ["name" ]: results[i].username };
  						// the username is added
  						resultsArr.push(resultsObj);
  						// add score data
  						resultsArr.push({total_score: results[i].total_score,
  					  category: results[i].category})
  						resultsObj = { [j] : resultsArr };
  						// resultsObj[j] = resultsArr;

  					}
  		            
  					if (i === results.length-1){
  						outputArr.push(resultsObj);
  					}

  				}
  				// post processing to get right format for charts
  				var outputObj = {};
  				for (var k = 0; k < outputArr.length; k++){
  					outputObj[k+1] = outputArr[k][k+1];
  				}
  				// console.log("arr", outputArr[0][1]);
	  			res.json(outputObj);
	  		})
  		})
   
	}

	// get all users data for the map
	app.get('/map', function (req, res) {
		// select a count of users by category and location
		var total = 50;
   		var queryString = "select count(b.id) as total, b.overall_category, b.location from users as b group by b.location, b.overall_category";
   		// select b.username, sum(a.score), a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1 group by a.category
		db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT})
  		.then(function(results) {
  			res.json(results);
  		})

	})

	// get category for user id 
	app.get('/category/:id', function (req, res) {
		var userid = req.params.id;  // passed in from client
		// select a count of users by category and take the highest only (limit 1)
   		var queryString = "select sum(score) as total, a.category from rawscores as a  where a.user_id = " + userid + " group by a.category order by total desc limit 1"
   		// select b.username, sum(a.score), a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1 group by a.category
		db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT})
  		.then(function(results) {
  			res.json(results);
  		})
	})



	// add scores
	app.post('/score', function (req, res) {		
	    // loops through and updates rawscores table
	    // composite key : question_id, category, user_id
	    // composite key should be unique
		for (var i = 0; i < req.body.arr.length; i++){
			// updates rawscores table
			// db.Rawscore.create({
			// 	score: req.body.arr[i].score,
			//    	category: req.body.arr[i].category,
			//    	user_id: req.body.arr[i].user_id,
			//    	question_id: req.body.arr[i].question_id
	  //   	}).then(function(){
	  //   		res.json();
	  //   	}).catch(function(err){
			// 	console.log(err);
			// })
			// not fully tested - need scores
			db.Rawscore.find({ where: { category: req.body.arr[i].category,
			   	user_id: req.body.arr[i].user_id,
			   	question_id: req.body.arr[i].question_id} })
			  .on('success', function (score) {
			    // Check if record exists in db
			    console.log(score);
			    if (score) {
			    	console.log("updating...");
				      score.updateAttributes({
				        score: req.body.arr[i].score
				      })
				      .success(function () {
					      	res.status(200).send("Successfully Updated Scores");
							return;
				      })
			    } 
			    else {
			    	console.log("creating...");
			    	//  if it does not exist then
			    	//  create scores
			    	db.Rawscore.create({
						score: req.body.arr[i].score,
					   	category: req.body.arr[i].category,
					   	user_id: req.body.arr[i].user_id,
					   	question_id: req.body.arr[i].question_id
					}).then(function(){
			    		res.status(200).send("Successfully Created Scores.");
						return;
			    	}).catch(function(err){
			    		res.status(400).send("Database Problem");
						return;
						// console.log(err);
					})

			    }
			  })
		}
	})

	// update the category and nerd_level in users table based on user_id
	app.post('/category/nerd/:id', function (req, res) {
		var userid = req.params.id;  // passed in from client
		// select a count of users by category and take the highest only (limit 1)
   		var queryString = "select sum(score) as total, a.category from rawscores as a  where a.user_id = " + userid + " group by a.category order by total desc limit 1"
   		// the category, then the nerd level then update user table
		db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT})
  		.then(function(results) {
			var score = results[0].total;
			var category = results[0].category;
  			db.Nerdlevel.findAll({
  				where: {min_score: {lte: score}},
  				attributes: ['nerd_level'],
  				order: 'max_score DESC',
  				limit: 1
  			}).then(function(data){
			  	// finally update the nerd_level in the user table
				db.User.update(
					{nerd_level: data[0].nerd_level, 
					overall_category: category }, 
					{where : { id : userid }}, 
					{fields: ['nerd_level', 'overall_category']}
				).catch(function(err){
					console.log(err);
				});
			}).catch(function(err){
				// res.redirect("/");
			})
  		})
	})





}	



module.exports = router;
