'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Violation = mongoose.model('Violation');

/**
 * Globals
 */
var user, violation;

/**
 * Unit tests
 */
describe('Violation Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			violation = new Violation({
				// Add model fields
				// ...
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return violation.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Violation.remove().exec();
		User.remove().exec();

		done();
	});
});