'use strict';

var citations = require('../../app/controllers/citations.server.controller'),
	violations = require('../../app/controllers/violations.server.controller');

module.exports = function(app) {
	app.route('/api/citations')
		.get(citations.read);

	app.route('/api/violations/:citationNumber')
		.get(violations.read);

	// Finish by binding the violation middleware
	app.param('citationNumber', violations.byCitationNumber);
};
