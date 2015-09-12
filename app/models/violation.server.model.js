'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Violation Schema
 */
var ViolationSchema = new Schema({
	id: Number,
	citation_number: Number,
	violation_number: String,
	violation_description: String,
	warrant_status: String,
	warrant_number: String,
	status: String,
	status_date: String,
	fine_amount: String,
	court_cost: String
});

mongoose.model('Violation', ViolationSchema);
