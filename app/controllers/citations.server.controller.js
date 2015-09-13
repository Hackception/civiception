'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Citation = mongoose.model('Citation'),
  _ = require('lodash'),
  url = require('url');

/**
 * Show the current Citation
 */
exports.read = function(req, res) {
  var query = url.parse(req.url, true).query;

  if (!_.isEmpty(query.citationNumber)) {
    Citation.find({ citation_number: query.citationNumber }, function(err, citation) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(citation);
      }
    });
  } else if (!_.isEmpty(query.driversLicense)) {
    Citation.find({ drivers_license_number: query.driversLicense }, function(err, citation) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(citation);
      }
    });
  } else if (!_.isEmpty(query.firstName) && !_.isEmpty(query.lastName) && !_.isEmpty(query.dateOfBirth)) {
    Citation.find({
      first_name: query.firstName,
      last_name: query.lastName,
      date_of_birth: query.dateOfBirth
    }, function(err, citation) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(citation);
      }
    });
  } else {
    res.json(req.citation);
  }
};
