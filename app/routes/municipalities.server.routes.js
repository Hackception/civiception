'use strict';

var municipalities = require('../../app/controllers/municipal-court-websites.server.controller');

module.exports = function(app) {
	app.route('/municipalities')
		.get(municipalities.list);

	app.route('/municipalities/:municipality')
		.get(municipalities.read);

	// Finish by binding the violation middleware
	app.param('municipality', municipalities.byMunicipality);
};
