var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  

// http://unitjs.com/guide/should-js.html

describe('Routing', function() {
  var url = 'http://localhost:8080';

  // TEST 1 - saving a new user with unique username and password
    it('should not return error for unique username', function(done) {
      var profile = {
        username: 'uniqueusername_7',
        password: 'uniqueusername_3',
        email: 'uniqueusername_7@email.com',
        location: 'CA'
      };
    request(url)
	.post('/newuser')
	.send(profile)
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          res.status.should.be.equal(200);
          done();
        });
    });
  // TEST 2  - Saving a duplicate username
  describe('User', function() {
    it('should return error trying to save duplicate username', function(done) {
      var profile = {
        username: 'uniqueusername_1',  // not unique
        password: 'uniqueusername_2',
        email: 'uniqueusername_2@email.com',
        location: 'CA'
      };
    request(url)
	.post('/newuser')
	.send(profile)
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          res.status.should.be.equal(401);
          done();
        });
    });
// TEST 3  - Saving a duplicate email
  describe('User', function() {
    it('should return error trying to save duplicate email', function(done) {
      var profile = {
        username: 'uniqueusername_2',  //  unique
        password: 'uniqueusername_2',
        email: 'uniqueusername_1@email.com', // not unique
        location: 'CA'
      };
    request(url)
	.post('/newuser')
	.send(profile)
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          res.status.should.be.equal(401);
          done();
        });
    });
   });
// TEST 4  - should return non-zero length object from aggregrate score query
// 200 OK response
    describe('AggregateScore', function() {
    it('should return object with aggregate of all user scores per category', function(done) {
    request(url)
	.get('/aggregatescore')
    // end handles the response
	.end(function(err, res) {
		if (err) {
			throw err;
		}
      	// this is should.js syntax, very clear
      	//need to figure out json
    	res.body.should.be.type('object');
		res.body.should.have.property('1');  // at least one object returned
	  	res.status.should.be.equal(200);  // http response status
        	done();
        });
    });
    });
    // TEST 5 - test that map route return results and http status 200
    describe('map', function() {
    it('should return object with all users aggregated based on location', function(done) {
    // once we have specified the info we want to send to the server via POST verb,
    // we need to actually perform the action on the resource, in this case we want to 
    // POST on /api/profiles and we want to send some info
    // We do this using the request object, requiring supertest!
    request(url)
	.get('/aggregatescore')
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          res.body.should.be.type('object');
          res.status.should.be.equal(200);
          done();
        });
    });
    });

});
    // TEST 6 - /question should fail if no valid token sent
    describe('question', function() {
    it('invalid token - should send 400 status and have content {message: invalid_token}', function(done) {
    request(url)
    .get('/question').set('authorization', 'Bearer ' + "invalidtokensent")
    // .send({ jwtsecret : "putthisinaseparatefile"})
	// .get('/question')
	// .set('Authorization', 'Bearer ' + token)
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.status.should.be.equal(401);
          res.body.should.be.type('object');
          res.body.should.have.key("message");
          res.body.should.have.key("message").match("invalid_token");
          done();
        });
    });
    });

    // TEST 7 - /question should succeed if  valid token sent
    describe('question', function() {
    it('valid token - should send 200 status - NB must put valid token in here for it to pass', function(done) {
    request(url)
    .get('/question').set('authorization', 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nzc0LCJlbWFpbCI6ImZpb25hLmhlZ2FydHlAaWNsb3VkLmNvbSIsInVzZXJuYW1lIjoiZmlvbmEuaGVnYXJ0eUBpY2xvdWQuY29tIiwiaWF0IjoxNDg3MDAzMTA4LCJleHAiOjE0ODcwMDQ5MDh9.7Cy3ldDkZYDvjScvr9xEzXvAygbOfDEGlI7sq_n-vlw")
    //NB must put valid token in here for it to pass
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.status.should.be.equal(200);
          res.body.should.be.type('object');
          done();
        });
    });
    });

    // TEST 8 - /forgot/:token not should succeed if  invalid token sent
    describe('/forgot/:token', function() {
    it('invalid token - should send 401 status', function(done) {
    var token = { token : "invalidtokensent"}
    request(url)
    .get('/forgot/:token')
    .send(token)
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.status.should.be.equal(401);
          res.body.should.be.type('object');
          done();
        });
    });
    });

    // TEST 9 - /forgot/:token should succeed if  valid token sent
    describe('/forgot/:token', function() {
    it('valid token - should send 200 status', function(done) {
    request(url)
    // token gotten from password reset email
    .get('/forgot/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpb25hLmhlZ2FydHlAaWNsb3VkLmNvbSIsImlhdCI6MTQ4NzAwMzMzNywiZXhwIjoxNDg3MDAzNjM3fQ.fGtTif_fyLTWKYl3LpIOEW5b9EatSZOtac5OzcUiwE8')
    // .send(token)
	//NB must put valid token in here for it to pass
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.status.should.be.equal(200);
          res.body.should.be.type('object');
          done();
        });
    });
    });


    // TEST 10 - POST /password should succeed if valid user
    describe('/password/reset', function() {
   	this.timeout(15000);
    it('POST /password/reset should succeed if valid user  - needs valid login token', function(done) {
    var newpassword = {password: "newpassword"}
    request(url)
    // token obtained from user login cookie
    //needs valid token
    .post('/password/reset').set('authorization', 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nzc0LCJlbWFpbCI6ImZpb25hLmhlZ2FydHlAaWNsb3VkLmNvbSIsInVzZXJuYW1lIjoiZmlvbmEuaGVnYXJ0eUBpY2xvdWQuY29tIiwiaWF0IjoxNDg3MDAzMTA4LCJleHAiOjE0ODcwMDQ5MDh9.7Cy3ldDkZYDvjScvr9xEzXvAygbOfDEGlI7sq_n-vlw")
	.send(newpassword)
	//NB must put valid token in here for it to pass
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.status.should.be.equal(200);
          // res.body.should.be.type('object');
          done();
        });
    });
    });


});

