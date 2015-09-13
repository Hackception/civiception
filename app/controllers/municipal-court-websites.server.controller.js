'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  MunicipalCourtWebsite = mongoose.model('MunicipalCourtWebsite');

/**
 * Show the current Municipality
 */
exports.read = function(req, res) {
  res.json(req.municipalCourtWebsites);
};

/**
 * List of Municipalities
 */
exports.list = function(req, res) {
  MunicipalCourtWebsite.find().exec(function(err, municipalCourtWebsites) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(municipalCourtWebsites);
		}
	});
};

/**
 * MunicipalCourtWebsites middleware
 */
exports.byMunicipality = function(req, res, next, municipality) {
  console.log(municipality)
	MunicipalCourtWebsite.find({municipality: municipality}, function(err, municipalCourtWebsites) {
		if (err) return next(err);
		if (!municipalCourtWebsites) return next(new Error('Failed to load Municipality ' + municipalCourtWebsites));
		req.municipalCourtWebsites = municipalCourtWebsites;
		next();
	});
};
