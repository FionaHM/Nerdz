var methodOverride = require("method-override");
var db = require('../models');
var path = require("path");
var passwordHash = require("password-hash");
var expressJWT = require("express-jwt");
var jwt = require("jsonwebtoken");
var session = require("express-session");

function router(app) {
    // middleware that checks for jwt from api

    // some routes wont require a jwt e.g. login route these are 
    // specified in the unless clause
    // app.use(expressJWT({ secret: "putthisinaseparatefile"}).unless({path: ['/loginpage', '/login']}));
    // app.use(session({cookie: { httpOnly : true}}));
    // Override with POST having ?_method=PUT or DELETE
    app.use(methodOverride("_method"));

    // path for main landing page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    })

    app.get('/loginpage', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/login.html"));
    })

    app.post('/login', function(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        if (!email) {
            res.status(400).send("email required");
            return;
        }
        if (!password) {
            res.status(400).send("password required");
            return;
        }

        db.User.findOne({
                where: { email: email }
            }).then(function(data) {


                if (passwordHash.verify(password, data.password)) {
                    // send back the token
                    var myToken = jwt.sign({ username: data.username }, "putthisinaseparatefile");
                    // res.status(200).json(myToken);
                    // res.cookie('sessionid', '1', {httpOnly : true});
                    // res.cookie('sessionid', '1', {secure : true});
                    res.status(200).json(myToken);
                } else {
                    res.status(400).send("Invalid Password");
                }
                // true


            }).catch(function(err) {
                console.log(err);
                // res.redirect("/");
            })
            // to be completed
    })

    // gets all questions from the database
    app.get('/question', function(req, res) {
        // Query the database
        db.Question.findAll({}).then(function(data) {
            res.json(data)
        }).catch(function(err) {
            res.redirect("/");
        })
    })

    app.get('/aggregatescore/:id?', function(req, res) {
        // get aggregate score for a user
        var total = 0;
        var userid = req.params.id; // passed in from client
        var queryString = "select sum(a.score) as total from rawscores as a, users as b where b.id = a.user_id";
        // if there is a userid sent then append it to the query
        if (userid !== undefined) {
            queryString += " and a.user_id = " + userid;
        }
        // select b.username, sum(a.score), a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1 group by a.category
        db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT })
            .then(function(results) {
                // gives percentage
                total = results[0].total;
                // this give back raw scores
                queryString = "select b.username, sum(a.score) as total_score, a.category from rawscores as a, users as b where b.id = a.user_id group by  b.username, a.category";
                // user id gives raw scores
                if (userid !== undefined) {
                    queryString = "select b.username, sum(a.score) as total_score, a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = " + userid + " group by a.category";
                }
                db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT })
                    .then(function(results) {
                        // put results into format for charts - per jess example
                        var resultsObj = { "name": results[0].username };
                        var outputArr = [];
                        var user = results[0].username;
                        var resultsArr = [];
                        resultsArr.push(resultsObj);
                        var control = 0;
                        var j = 1;
                        for (var i = 0; i < results.length; i++) {

                            if (user === results[i].username) {
                                resultsArr.push({
                                    total_score: results[i].total_score,
                                    category: results[i].category
                                })
                                resultsObj = {
                                    [j]: resultsArr };
                                // resultsObj[j] = resultsArr;
                                console.log(resultsObj);
                            } else {

                                outputArr.push(resultsObj);
                                j = j + 1;
                                // resultsObj = {};
                                resultsArr = [];
                                // resultsObj = { "num" : resultsArr };
                                user = results[i].username;
                                resultsObj = {
                                    ["name"]: results[i].username };
                                // the username is added
                                resultsArr.push(resultsObj);
                                // add score data
                                resultsArr.push({
                                    total_score: results[i].total_score,
                                    category: results[i].category
                                })
                                resultsObj = {
                                    [j]: resultsArr };
                                // resultsObj[j] = resultsArr;

                            }

                            if (i === results.length - 1) {
                                outputArr.push(resultsObj);
                            }

                        }
                        // post processing to get right format for charts
                        var outputObj = {};
                        for (var k = 0; k < outputArr.length; k++) {
                            outputObj[k + 1] = outputArr[k][k + 1];
                        }
                        // console.log("arr", outputArr[0][1]);
                        res.json(outputObj);
                    })
            })

    })

    // get all users data for the map
    app.get('/api/map', function(req, res) {
        // select a count of users by category and location
        var total = 50;
        var queryString = "select count(b.id) as total, b.overall_category, b.location from users as b group by b.location, b.overall_category";
        // select b.username, sum(a.score), a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1 group by a.category
        db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT })
            .then(function(results) {
                res.json(results);
            })

    })

    // get category for user id 
    app.get('/category/:id', function(req, res) {
        var userid = req.params.id; // passed in from client
        // select a count of users by category and take the highest only (limit 1)
        var queryString = "select sum(score) as total, a.category from rawscores as a  where a.user_id = " + userid + " group by a.category order by total desc limit 1"
            // select b.username, sum(a.score), a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1 group by a.category
        db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT })
            .then(function(results) {
                res.json(results);
            })
    })


    // create user
    app.post('/user', function(req, res) {
        // capture the name of the user
        var username = req.body.username;
        var email = req.body.email;
        // hash the password before saving
        var password = passwordHash.generate(req.body.password);
        var location = req.body.location;
        // // find the customer in the Users table or create if it does not exist
        db.User.findOrCreate({
            where: { username: username, email: email, password: password, location: location }
        }).then(function() {
            res.sendFile(path.join(__dirname + "/../public/questions.html"));
        }).catch(function(err) {
            console.log(err);
            // res.redirect("/");
        })
    })

    // add scores
    app.post('/score', function(req, res) {
        // loops through and updates rawscores table
        for (var i = 0; i < req.body.arr.length; i++) {
            // updates rawscores table
            db.Rawscore.create({
                score: req.body.arr[i].score,
                category: req.body.arr[i].category,
                user_id: req.body.arr[i].user_id,
                question_id: req.body.arr[i].question_id
            }).then(function() {
                res.json();
            }).catch(function(err) {
                console.log(err);
            })
        }
    })

    // update the category and nerd_level in users table based on user_id
    app.post('/category/nerd/:id', function(req, res) {
        var userid = req.params.id; // passed in from client
        // select a count of users by category and take the highest only (limit 1)
        var queryString = "select sum(score) as total, a.category from rawscores as a  where a.user_id = " + userid + " group by a.category order by total desc limit 1"
            // the category, then the nerd level then update user table
        db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT })
            .then(function(results) {
                var score = results[0].total;
                var category = results[0].category;
                db.Nerdlevel.findAll({
                    where: { min_score: { lte: score } },
                    attributes: ['nerd_level'],
                    order: 'max_score DESC',
                    limit: 1
                }).then(function(data) {
                    // finally update the nerd_level in the user table
                    db.User.update({
                        nerd_level: data[0].nerd_level,
                        overall_category: category
                    }, { where: { id: userid } }, { fields: ['nerd_level', 'overall_category'] }).catch(function(err) {
                        console.log(err);
                    });
                }).catch(function(err) {
                    // res.redirect("/");
                })
            })
    })





}


module.exports = router;
