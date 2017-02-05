var methodOverride = require("method-override");
var db = require('../models');

function router(app){

	// Override with POST having ?_method=PUT or DELETE
	app.use(methodOverride("_method"));

// Path to get all users - just for testing
	app.get('/api/user', function(req, res){
		db.User.findAll({
		})
        .then(function(rows) {
			console.log(rows);
			res.json(rows);
        })
        .catch(function(err){
        	console.log(err);
        	res.redirect("/");
        })
	})

	// Path to get all scores for a user
	app.get('/api/score/:id', function(req, res){
		var userid = req.params.id; 
		// find all the burgers, devoured and not devoured
		db.User.findAll({
			include: [db.Score]
		}).then(function(rows) {
			console.log(rows);
			res.json(rows);
        })
        .catch(function(err){
        	console.log(err);
        	res.redirect("/");
        })
    })

	// Path to get all categories 
	app.get('/api/category', function(req, res){
		// res.sendFile(path.join(__dirname + "/../public/index.html"));
		// find all the burgers, devoured and not devoured
		db.Category.findAll({
		}).then(function(rows) {
			console.log(rows);
			res.json(rows);
        })
        .catch(function(err){
        	console.log(err);
        	res.redirect("/");
        })
    })
	// Path to get all questions 
	app.get('/api/question', function(req, res){
		// res.sendFile(path.join(__dirname + "/../public/index.html"));
		// find all the burgers, devoured and not devoured
		db.Question.findAll({
		}).then(function(rows) {
			console.log(rows);
			res.json(rows);
        })
        .catch(function(err){
        	console.log(err);
        	res.redirect("/");
        })
    })

    // Adding categories
	app.post('/category', function (req, res) {
		// capture the name of the burger
		// var username = req.body.username;
		// var email = req.body.email;
		// var score = req.body.score;
		// // find the customer in the Customers table or create if it does not exist
 	    db.Category.findOrCreate({
			where: { category_name : "A"}
			// include: [db.Score]
	    }).then(function() {
			res.redirect("/");
		}).catch(function(err){
			console.log(err);
			res.redirect("/");
		})
	})

		// here only for testing
	app.post('/question', function (req, res) {

		
			// perhaps aggregate scores here per category then save to database
			db.Question.create({
				// question: req.body.question.parseInt(),
				// categoryid:  req.body.categoryid.parseInt(),
				// userid:  req.body.useid.parseInt(),
				// score : req.body.score.parseInt()
				question: "What day is today?",
    		
		    	}).then(function() {
					res.redirect("/");
				}).catch(function(err){
					console.log(err);
					res.redirect("/");
				})
		// }
	})
}

module.exports = router;
