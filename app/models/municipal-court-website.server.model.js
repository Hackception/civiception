'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * MunicipalCourtWebsites Schema
 */
var MunicipalCourtWebsiteSchema = new Schema({
	municipality: String,
  municipal_website: String,
  municipal_court_website: String,
  court_clerk_phone_number_listed_on_muni_site: String,
  online_payment_system_provider: String,
  mention_of_dress_code: String,
  fine_schedule_listed: String,
  municipal_codes_listed: String,
  order_seen_stated: String
});

mongoose.model('MunicipalCourtWebsite', MunicipalCourtWebsiteSchema);
