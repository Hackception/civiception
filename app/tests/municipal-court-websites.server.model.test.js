'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	MunicipalCourtWebsite = mongoose.model('MunicipalCourtWebsite');

/**
 * Globals
 */
var user, municipalCourtWebsite;

/**
 * Unit tests
 */
describe('Municipal court websites Model Unit Tests:', function() {
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
			municipalCourtWebsite = new MunicipalCourtWebsite({
				// Add model fields
				// ...
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return municipalCourtWebsite.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) {
		MunicipalCourtWebsite.remove().exec();
		User.remove().exec();

		done();
	});
});
