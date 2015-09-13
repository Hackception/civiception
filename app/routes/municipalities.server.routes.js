'use strict';

var municipalities = require('../../app/controllers/municipal-court-websites.server.controller');

module.exports = function(app) {
	app.route('/api/municipalities')
		.get(municipalities.list);

	app.route('/api/municipalities/:municipality')
		.get(municipalities.read);

	// Finish by binding the violation middleware
	app.param('municipality', municipalities.byMunicipality);
};
