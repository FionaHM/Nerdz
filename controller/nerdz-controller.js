var methodOverride = require("method-override");
var db = require('../models');
var path = require("path");

function router(app){

	// Override with POST having ?_method=PUT or DELETE
	app.use(methodOverride("_method"));

	// Path for main landing page
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + "/../public/index.html"));
	})

	// POST to CREATE USER
	app.post('/user', function (req, res) {
		// capture the name of the burger
		// var username = req.body.username;
		// var email = req.body.email;
		// // find the customer in the Customers table or create if it does not exist
 	    db.User.findOrCreate({
 	    	// DUMMY DATA
			where: { username: "me", email: 'test'},
	    }).then(function() {
	    	// res.redirect("/");
	    	// maybe redirect with user id??
			res.sendFile(path.join(__dirname + "/../public/questions.html"));
		}).catch(function(err){
			console.log(err);
			res.redirect("/");
		})
	})


	app.get('/question', function (req, res) {

		db.Question.findAll({}).then(function(data){
			res.json(data)
		}).catch(function(err){
			res.redirect("/");
		})

		// db.Category.findAll({include: db.Question}).then(function(data){
		// 	res.json(data);
		// 	console.log(data)
		// }).catch(function(err){
		// 	console.log(err);
		// 	res.redirect("/");
		// })
	// }
	})

	//add scores
	app.post('/score', function (req, res) {
		
			// need to capture the following from the Client
			   // need to see how the data is passed in req object
			   // but we need the following:
			   // question id => var question = req.body.question;
			   // category_id => var categoryid = req.body.categoryid;
			   // user_id => var userid = req.body.userid;
			   // individual scores => var categoryid = req.body.scores;
			   // might need to loop through the req object
			   // then do some calcuation/aggregaion on the scores
			   // before saving to the database below

			   // seems to expect json object and not an array

				db.Score.create({
				// question: req.body.question.parseInt(),
				// categoryid:  req.body.categoryid.parseInt(),
				// userid:  req.body.useid.parseInt(),
				// score : req.body.score.parseInt()
					score: req.body.score,
				   	category_id: req.body.category_id,
				   	user_id: req.body.user_id
				
		    	}).then(function() {
					res.redirect("/");
				}).catch(function(err){
					console.log(err);
					res.redirect("/");
				})
			 // }
	})

	// get all users data for the map
	app.get('/api/map', function (req, res) {


			// to much nesting - just aggregate by category id then back fill from table?
			// or just save category not id
			db.User.find({
			    include: [
			        {
			            model: db.Score,
			        }
			    ]
			}).then(function(data){
			res.json(data)
		}).catch(function(err){
			// res.redirect("/question");
			console.log(err)
		})
	// }
	})


}	


module.exports = router;