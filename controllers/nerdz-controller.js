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
            // console.log("Message %s send : %s", info.messageId, info.response);
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
                    // res.status(401).send({ message: 'invalid_token' });
                    // res.json({ message: 'invalid_token' });
                    var message = { message: 'invalid_token' };
                    reject(message.message);
                } else {
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
            // token expires in 60 mins 
            var myToken = jwt.sign({ id: data.id, email: data.email, username: data.username }, secret, { expiresIn: 60 * 60 });
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
        res.sendFile(path.join(__dirname + "/../public/login.html"));
    })

    app.get('/graph', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/graphs.html"));
    })

    app.get('/geekornerd', function(req, res) {
        decodeToken(req, res, jwtsecret, 'login').then(function(decoded) {
            res.sendFile(path.join(__dirname + "/../public/geeksornerds.html"));
        }).catch(function(err) {
            // res.status(401).send(err);
            res.redirect("/");
        });     
    })
   
   // pop up login modal
   app.get('/modal/login', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/modal_login.html"));
    })


    app.get('/flashcards', function(req, res){
        decodeToken(req, res, jwtsecret, 'login').then(function(decoded) {
           // get flashcard data from database and retrun
            db.Flashcard.findAll({}).then(function(data){
                res.json(data)
            }).catch(function(err){
                res.redirect("/");
            })
        }).catch(function(err) {
             res.redirect("/");
            // res.status(401).send(err);
        });
        
    })


    function changePassword(email, password) {
        // var password = passwordHash.generate(tmppwd);
        db.User.update({ 
            password: password },
            { where: { email: email } }, { fields: ['password'] 
        }).catch(function(err) {
            console.log(err);
        })
    }

    // takes in password reset and displays reset page
    app.get('/forgot/:token', function(req, res) {
        var token = req.params.token;
        console.log(token);
        decodeToken(req, res, pwdsecret, 'pwd', token).then(function(decoded) {
            // use data in token to create  password
            var tokenObj = { "token": token };
            res.render('index', { "token": token });

        }).catch(function(err) {
            res.status(401).send(err);
        });
    })


    //*** POST ROUTES **//

    // for creating the email to send out
    app.post('/password', function(req, res) {
        var email = req.body.email.trim();
        // verify valid user in database ****
        db.User.findOne({ where: { email: email } })
            .then(function(user) {
                // Check if record exists in db
                if (user) {
                    var token = returnToken(res, pwdsecret, "pwd", email);
                    passwordResetEmail(email, token);
                    res.redirect('/');
                } else {
                    // res.status(400).send("Invalid Password");
                    res.status(400).send("No User found.");
                    return;
                }
            })

    })

    function passwordReset(req, res, secret, action, token){
        decodeToken(req, res, secret, action, token).then(function(decoded) {
            console.log(decoded);
            // use data in token to create temp password
            var email = decoded.email;
            //// take password from body

            var newpassword = req.body.newpassword;
            var confirmpassword = req.body.confirmpassword;
             // console.log(newpassword,confirmpassword );
            // confirm passwords match and reset
            var passwordmatch = false;
            // verify passwords match
            if (newpassword === confirmpassword) {
                // tell user to update password
                var password = passwordHash.generate(newpassword);
                changePassword(email, password);
                passwordmatch = true;
                return passwordmatch;
            } 
        }).then(function(passwordmatch){
            // handle result
            if (passwordmatch) {
                //send to login page
                res.redirect("/");
            }
            else {
                // send error message
                if (action === "pwd"){
                    res.render('index', {message: "passwords don't match"});
                } else {
                    res.json({message: "passwords don't match"});
                }
                
            }

        }).catch(function(err) {
            res.status(401).send(err);
        });
    }

    // user can change password when logged in with auth token
    app.post('/password/reset', function(req, res) {  
        passwordReset(req, res, jwtsecret, 'login');      
    })


    // user can change password when logged in with auth token
    app.post('/password/mail/reset', function(req, res) {
        var token = req.body.token;
        passwordReset(req, res, pwdsecret, 'pwd', token);
    })

    // create a new user
    app.post('/newuser', function(req, res) {
        // capture the name of the user
        var username = req.body.username.toLowerCase();
        var email = req.body.email.toLowerCase();
        var password = req.body.password;
        var location = req.body.location;
        // validation
        if (!username) {
            res.status(400).send("username required");
            return;
        }
        if (!email) {
            res.status(400).send("email required");
            return;
        }
        if (!password) {
            res.status(400).send("password required");
            return;
        }
        // hash before saving
        password = passwordHash.generate(req.body.password);
        // unique constraint on username and email
        // checkif user exists
        db.User.findOrCreate({
            where: { username: username, email: email, password: password, location: location }
        }).spread(function(data, created) {
            // if found verify that password is correct and generate token if 
            if (created) { // should be true if newly created
                returnToken(res, jwtsecret, "login", data);
            }

        }).catch(function(err) {
            message = err.errors[0].message;
            return res.status(401).send(message);
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
                    // console.log(myToken);
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
        })
    })



    // gets all questions from the database - with multiple categories per questiob
    app.get('/questionpage', function(req, res) {
        // Query the database
        
      res.sendFile(path.join(__dirname + "/../public/questions.html"), function(err) {});


    })

    // gets all questions from the database - with multiple categories per questiob
    app.get('/question', function(req, res) {
        decodeToken(req, res, jwtsecret, "login").then(function(decoded) {
            // Query the database
            db.Question.findAll({
                include: [db.Category]
            }).then(function(data) {
                // pull out each category and append to the question
                res.json(data);
            }).catch(function(err) {
                res.redirect("/");
            })
        }).catch(function(err) {
            res.status(401).send(err);
        });

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
            var userid = decoded.id; // from token
            aggregates(req, res, userid);
        }).catch(function(err) {
            res.status(401).send(err);
        });
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
                
                        res.json(outputObj);
                    })
            })

    }

    // get all users data for the map
    app.get('/map', function(req, res) {
        // select a count of users by category and location
        // var total = 50;
        var queryString = "select count(b.id) as total, b.overall_category, b.location from users as b group by b.location, b.overall_category";
        // select b.username, sum(a.score), a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1 group by a.category
        db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT })
            .then(function(results) {
                // console.log(results);
                res.json(results);
            })
    })

    // get category for user id 
    app.get('/cat', function(req, res) {
        decodeToken(req, res, jwtsecret, 'login').then(function(decoded) {
            // get aggregate score for a user
            var userid = decoded.id; // passed in from token
            var queryString = "select sum(score) as total, a.category from rawscores as a  where a.user_id = " + userid + " group by a.category order by total desc limit 1"
            db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT })
                .then(function(results) {
                    console.log(results);
                    res.json(results);
                }).catch(function(err) {
                    console.log(err);
                });
        }).catch(function(err) {
            res.status(401).send(err);
        });
    })

    // used for confirmation that user has valid token
    app.get('/validuser', function(req, res) {
        decodeToken(req, res, jwtsecret, 'login').then(function(decoded) {
            var validuser = { "message": valid_user };
            res.json(validuser);
        }).catch(function(err) {
            res.status(401).send(err);
        });
    })



    // add scores to database
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
            res.status(401).send(err);
        });
    })

    // determine the nerd level
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
                        var nerdObj = { nerd_level : data[0].nerd_level};
                        // finally update the nerd_level in the user table
                        db.User.update(
                            {nerd_level: data[0].nerd_level, 
                            overall_category: category }, 
                            {where : { id : userid }}, 
                            {fields: ['nerd_level', 'overall_category']}
                        ).catch(function(err){
                            console.log(err);
                        });
                        // console.log(nerdObj, "nerdobj");
                        return nerdObj;     
                    }).then(function(nerdObj){
                        res.json(nerdObj);
                    }).catch(function(err) {
                        res.status(400).send("Nerd Level Not Found");
                    })
                })
        }).catch(function(err) {
            res.status(401).send(err);
        });

    })

}




module.exports = router;
