'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Citation Schema
 */
var CitationSchema = new Schema({
	id: Number,
	citation_number: Number,
	citation_date: String,
	first_name: String,
	last_name: String,
	date_of_birth: String,
	defendant_address: String,
	defendant_city: String,
	defendant_state: String,
	drivers_license_number: String,
	court_date: String,
	court_location: String,
	court_address: String
});

mongoose.model('Citation', CitationSchema);
