'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Violation = mongoose.model('Violation');

/**
 * Show the current Violation
 */
exports.read = function(req, res) {
  res.json(req.violation);
};

/**
 * Article middleware
 */
exports.byCitationNumber = function(req, res, next, citationNumber) {
  Violation.find({ citation_number: citationNumber }, function(err, violation) {
    if (err) return next(err);
    if (!violation) return next(new Error('Failed to load violation ' + citationNumber));
    req.violation = violation;
    next();
  });
};
