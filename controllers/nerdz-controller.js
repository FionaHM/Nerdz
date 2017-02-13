var db = require('../models');
var methodOverride = require("method-override");
var path = require("path");
var passwordHash = require("password-hash");
var expressJWT = require("express-jwt");
var jwt = require("jsonwebtoken");
var session = require("express-session");
var nodemailer = require("nodemailer");
// using template for password reset
var exprhbs = require('express-handlebars');
// secret for login auth token
var jwtsecret = process.env.JWT_SECRET || "putthisinaseparatefile";
// secret for login auth token
var pwdsecret = process.env.PWD_SECRET || "icantbelieveyouforgotyourpassword";


function router(app) {
    // this is cookie setting data - for client side cookies
    // httpOnly makes cookie data a bit more secure against from other scripts
    var cookieSecret = process.env.COOKIE_SECRET || "supersecretcookies";
    app.use(session({ secret: cookieSecret, cookie: { httpOnly: true, maxAge: 60000 }, resave: false, saveUninitialized: false }));
    // Override with POST having ?_method=PUT or DELETE
    app.use(methodOverride("_method"));

    // this tells express what template engine to use and the default template lives (main)
    app.engine('handlebars', exprhbs({ defaultLayout: 'main' }));
    // this sets the view engine to handlebars
    app.set('view engine', 'handlebars');

    //**** Functions ***//


    function passwordResetEmail(email, token) {
        // this part creates a reusable transporter using SMTP of gmail
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nerdzquiz@gmail.com',
                pass: 'JessicaFionaCharles' ///to be removed and changed
            }
        });
        var link = " http://localhost:8080/forgot/" + token; //API TO RESET PASSWORD
        var text = 'You are receiving this email because you requested a password reset for the Nerdz website. Please use the following link to reset your password.' + link + ' This link will expire in 5 minutes.';
        var html = '<br><p>You are receiving this email because you requested a password reset for the Nerdz website.</p><p> Please use the following link to reset your password:' + link + '</p><br><strong> This link will expire in 5 minutes.</strong><br><h2>The Nerdz Team</h2>';
        // setup email data
        var mailOptions = {
            from: '" The Nerdz Team" <nerdzquiz@gmail.com>',
            to: email,
            subject: 'Password Reset',
            text: text,
            html: html
        };

        //send the email
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error)
            }
            console.log("Message %s send : %s", info.messageId, info.response);
        })
    }
    // this is the function to capture and verify the incoming java web token - 
    // this needs to be place at the start of each protected api route
    // tokens are created at login
    // auth == login or pwd - pwdtoken is optional only for pwd reset
    function decodeToken(req, res, secret, auth, pwdtoken) {
        return new Promise(function(resolve, reject) {
            // set token as null initially
            var token = null;
            // checks the request header for the token
            if (auth == "login") {
                // console.log(req.headers.authorization);
                if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                    token = req.headers.authorization.split(' ')[1];
                } else {
                    token = null;
                }
            } else if (auth == 'pwd') {
                // if there is a token
                if (pwdtoken) {
                    token = pwdtoken;
                } else {
                    token = null;
                }
            }

            // use jwt verify to verify the token (symmetric - synchronous)
            // must use the same secret phrase as was used to generate token initally
            // verify the token
            jwt.verify(token, secret, function(err, decoded) {
                if (err) {
                    // send an error request and deny access
                    res.status(401).send({ message: 'invalid_token' });
                    reject(err);
                } else {
                    // console.log("decoded", decoded);
                    // pass the decoded token for use by the api
                    resolve(decoded);
                }
            });
        })
    }

    function verifyPassword(password, data, res, secret) {
        // verify that the password is correct
        if (passwordHash.verify(password, data.password)) {
            // generate the token using a secret phrase
            returnToken(res, jwtsecret, "login", data);
        } else {
            res.status(400).send("Invalid Password");
            return;
            // ***** to be completed once app is working as a unit
        }
    }
    // auth = login or pwd
    function returnToken(res, secret, auth, data) {
        if (auth === "login") {
            // this token is stored as a cookie on client and sent in AJAX Header
            // token expires in 30 mins 
            var myToken = jwt.sign({ id: data.id, email: data.email, username: data.username }, secret, { expiresIn: 60 * 30 });
            // console.log(token);
            res.json(myToken);
            return;

        } else if (auth === "pwd") {
            // expires in 5 mins
            var myToken = jwt.sign({ email: data }, secret, { expiresIn: 60 * 5 });
            return myToken;
        }
    }
    //****HTML ROUTES*******//

    //  This is a GET function for the root path "/"" to serve 
    // the main page, index.html.  This root path is not authenticated 
    // with a json web token. 
    app.get('/', function(req, res) {
        console.log("in index");
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    })

    // not sure if this route will be used in final app
    app.get('/login', function(req, res) {
        console.log("in login");
        res.sendFile(path.join(__dirname + "/../public/login.html"));
    })

    // // used to generate use charts based on test scores
    // app.get('/graph', function(req, res){
    // 	res.sendFile(path.join(__dirname + "/../public/graphs.html"));
    // })

    // test file for password
    app.get('/pwdtest', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/password.html"));
    })

    app.get('/graph', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/graphs.html"));
    })

    app.get('/geekornerd', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/geeksornerds.html"));
    })

    app.get('/flashcards', function(req, res){
        // get flashcard data from database and retrun
                db.Flashcard.findAll({}).then(function(data){
                    res.json(data)
                }).catch(function(err){
                    res.redirect("/");
                })
    })





    function changePassword(email, password) {
        // var password = passwordHash.generate(tmppwd);
        db.User.update({ password: password }, { where: { email: email } }, { fields: ['password'] }).catch(function(err) {}).then(function() {
            //nofity password has been changed
            // message on screen for user chanege while logged in
            // not sure when reset email..
        })
    }

    // takes in password reset and displays reset page
    app.get('/forgot/:token', function(req, res) {
        var token = req.params.token;
        console.log(token);
        decodeToken(req, res, pwdsecret, 'pwd', token).then(function(decoded) {
            // use data in token to create temp password
            var tokenObj = { "token": token };
            console.log(tokenObj);
            res.render('index', { "token": token });
            // res.render('index', {resultsObj: resultsObj});
            // need to randomly generate
            // var tmppwd = "tmppwd"; // send email with tmp pwd needs to match pwd send in email
            // tell user to update password
            // var password = passwordHash.generate(tmppwd);
            // changePassword(email,password);

        }).catch(function(err) {
            //
        });
    })


    //*** POST ROUTES **//

    // for creating the email to send out
    app.post('/password', function(req, res) {
        // email = req.body.email -- get from form
        // var email ="jhornsten@comcast.net";
        // var email ="fiona.hegarty@icloud.com";
        var email = req.body.email.trim();
        // verify valid user in database ****
        db.User.findOne({ where: { email: email } })
            .then(function(user) {
                // Check if record exists in db
                // var temppwd = "tmppwd"; // send email with tmp pwd
                // var password = passwordHash.generate(temppwd);
                // console.log(user);
                if (user) {
                    var token = returnToken(res, pwdsecret, "pwd", email);
                    passwordResetEmail(email, token);
                } else {
                    // res.status(400).send("Invalid Password");
                    res.status(400).send("No User found.");
                    return;
                }
            })

    })

    // user can change password when logged in with auth token
    app.post('/password/reset/', function(req, res) {
        decodeToken(req, res, jwtsecret, 'login').then(function(decoded) {
            // use data in token to create temp password
            var email = decoded.email;
            //// take password from body
            var tmppwd = req.body.password;
            // tell user to update password
            var password = passwordHash.generate(tmppwd);
            changePassword(email, password);
        }).catch(function(err) {
            // console.log(err)
        })
    })


    // user can change password when logged in with auth token
    app.post('/password/mail/reset', function(req, res) {
        var token = req.body.token;
        // console.log("token", token);
        decodeToken(req, res, pwdsecret, 'pwd', token).then(function(decoded) {
            // use data in token to create temp password
            var email = decoded.email;
            //// take password from body
            console.log("in here");
            var newpassword = req.body.newpassword.trim();
            var confirmpassword = req.body.confirmpassword.trim();
            console.log(newpassword, confirmpassword);
            if (newpassword === confirmpassword) {
                // tell user to update password
                var password = passwordHash.generate(newpassword);
                changePassword(email, password);
            } else {
                res.status(400).send("Passwords don't match.")
            }

        }).catch(function(err) {
            // console.log(err)
        })
    })

    // create a new user
    app.post('/newuser', function(req, res) {
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
            if (created) { // should be true if newly created
                returnToken(res, jwtsecret, "login", data);
                // returnToken(data, res, secret, auth)
            }
            // else {
            // 	verifyPassword(password, data, res);
            // }

        }).catch(function(err) {
            // console.log(err);
            message = err.errors[0].message;
            return res.status(401).send(message);
            // res.json(err.errors[0].message);
        })
    })

    // route to authenticate an existing user
    app.post('/existinguser', function(req, res) {
        var email = req.body.email.trim().toLowerCase();
        var password = req.body.password.trim();
        // some validation
        if (!email) {
            res.status(400).send("email required");
            return;
        }
        if (!password) {
            res.status(400).send("password required");
            return;
        }
        // query the database to find the user
        // email is used as unique identifier
        db.User.findOne({
            where: { email: email }
        }).then(function(data) {
            // if no data returned
            if (data === null) {
                res.status(400).send("User Not Found");
                return;
            }
            // compare the password entered to the stored password hash
            else {
                if (passwordHash.verify(password, data.password)) {
                    // generate the token using a secret phrase
                    var secret = process.env.JWT_SECRET || "putthisinaseparatefile"
                        // token current set to expire in one hour
                        // user id, username and email stored in the payload of the token
                        // this is needed for other apis to get user specific data
                    var myToken = jwt.sign({ id: data.id, email: data.email, username: data.username }, secret, { expiresIn: 60 * 30 });
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

        }).catch(function(err) {
            res.status(400).send("Database Error");
            return;
            // ***** to be completed once app is working as a unit
            // res.redirect("/");
        })
    })



    // gets all questions from the database - with multiple categories per questiob
    app.get('/questionpage', function(req, res) {
        // decodeToken(req, res, jwtsecret, "login").then(function(decoded){
        // Query the database
        res.sendFile(path.join(__dirname + "/../public/questions.html"), function(err) {
            // console.log(__dirname + "/../public/questions.html");
        });
        // }).catch(function(err){
        // 	console.log(err);
        // })


    })

    // gets all questions from the database - with multiple categories per questiob
    app.get('/question', function(req, res) {
        decodeToken(req, res, jwtsecret, "login").then(function(decoded) {
            // console.log(decoded);
            // Query the database
            db.Question.findAll({
                include: [db.Category]
            }).then(function(data) {
                // pull out each category and append to the question
                res.json(data)
            }).catch(function(err) {
                res.redirect("/");
            })
        }).catch(function(err) {
            // redirect to login if unauth?
            // console.log("redirect somewhere?")
            // res.redirect('/');
        })

    })

    app.get('/aggregatescore/', function(req, res) {
        // no jwt here
        var userid = req.params.id; // passed in from client
        // get aggregate score all
        aggregates(req, res, userid);
    })

    app.get('/aggregatescore/user/', function(req, res) {
        decodeToken(req, res, jwtsecret, "login", "").then(function(decoded) {
            // get aggregate score for a user
            console.log(decoded);
            var userid = decoded.id; // passed in from client
            // console.log("userid", userid);
            aggregates(req, res, userid);
        }).catch(function(err) {
            //
        });
        // decodeToken(req, res); //code for token validation 

    })

    function aggregates(req, res, userid) {
        var total = 0;
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
                                    [j]: resultsArr
                                };
                                // resultsObj[j] = resultsArr;
                                // console.log(resultsObj);
                            } else {

                                outputArr.push(resultsObj);
                                j = j + 1;
                                // resultsObj = {};
                                resultsArr = [];
                                // resultsObj = { "num" : resultsArr };
                                user = results[i].username;
                                resultsObj = {
                                    ["name"]: results[i].username
                                };
                                // the username is added
                                resultsArr.push(resultsObj);
                                // add score data
                                resultsArr.push({
                                    total_score: results[i].total_score,
                                    category: results[i].category
                                })
                                resultsObj = {
                                    [j]: resultsArr
                                };
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
                        console.log(outputObj);
                        res.json(outputObj);
                    })
            })

    }

    // get all users data for the map
    app.get('/map', function(req, res) {
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
    app.get('/cat', function(req, res) {
        decodeToken(req, res, jwtsecret, 'login').then(function(decoded) {
        // get aggregate score for a user
        var userid = decoded.id; // passed in from client
        // var userid = ; // passed in from client
        var queryString = "select sum(score) as total, a.category from rawscores as a  where a.user_id = " + userid + " group by a.category order by total desc limit 1"
            // select b.username, sum(a.score), a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1 group by a.category
        db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT })
            .then(function(results) {
                console.log(results);
                res.json(results);
            }).catch(function(err) {
                 console.log(err);
            });
        })
    })


    // add scores
    app.post('/score', function(req, res) {

        decodeToken(req, res, jwtsecret, 'login', "").then(function(decoded) {
            // loops through and updates rawscores table
            // composite key : question_id, category, user_id
            // composite key should be unique
            for (var i = 0; i < req.body.arr.length; i++) {
                // inserts if not there but updates if data there already
                db.Rawscore.upsert({
                    category: req.body.arr[i].category,
                    user_id: decoded.id,
                    question_id: req.body.arr[i].question_id,
                    score: req.body.arr[i].score
                }).then(function(test) {
                    // console.log(test);
                }).catch(function(err) {
                    // console.log(err);
                })

            }
            res.end();
        }).catch(function(err) {
            console.log("arrgh - error");
            console.log(err);
            // res.sendFile(path.join(__dirname + "/../public/graphs.html"));
        });

    })

    // update the category and nerd_level in users table based on user_id
    app.get('/category/nerd', function(req, res) {
        decodeToken(req, res, jwtsecret, 'login', "").then(function(decoded) {
            var userid = decoded.id; // passed in from client
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
                        res.json(data);
                        // no need to update for now
                        // mremove columsn from table
                        // finally update the nerd_level in the user table
                        // db.User.update({
                        //     nerd_level: data[0].nerd_level,
                        //     overall_category: category
                        // }, { where: { id: userid } }, { fields: ['nerd_level', 'overall_category'] }).catch(function(err) {
                        //     console.log(err);
                        // });
                    }).catch(function(err) {
                        res.status(400).send("Nerd Level Not Found");
                    })
                })
        }).catch(function(err) {
             res.status(400).send("Max Score Not Found");
        });


    })

}




module.exports = router;
