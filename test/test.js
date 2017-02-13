var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
// var mongoose = require('mongoose');
// var winston = require('winston');
// var config = require('./config-debug');

// http://unitjs.com/guide/should-js.html
describe('Routing', function() {
  var url = 'http://localhost:8080';

  describe('User', function() {
    it('should return error trying to save duplicate username', function(done) {
      var profile = {
        username: 'duplicateusername',
        password: 'uniquepassword',
        email: 'fiona@duplicateusername.com',
        location: 'CA'
      };
    // once we have specified the info we want to send to the server via POST verb,
    // we need to actually perform the action on the resource, in this case we want to 
    // POST on /api/profiles and we want to send some info
    // We do this using the request object, requiring supertest!
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
/// unique usename
    it('should not return error for unique username', function(done) {
      var profile = {
        username: 'testuniqueusername3',
        password: 'uniquepassword3',
        email: 'test@uniqueusername3.com',
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


    describe('AggregateScore', function() {
    it('should return object with aggregate of all user scores per category', function(done) {
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
          //need to figure out json
          res.body.should.be.type('object');
          res.status.should.be.equal(200);
          done();
        });
    });
    });

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



  });