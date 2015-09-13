'use strict';

angular.module('ticket').factory('Ticket', [
	'$resource',
	'$q',
	function($resource, $q) {

		// Public API
		return {
			/**
			* Fetches the citations by citationNumber, driversLicense, or firstName + lastName + dateOfBirth.
			*
			* @param {Number} citationNumber
			* @param {String} driversLicense
			* @param {String} firstName
			* @param {String} lastName
			* @param {String} dateOfBirth - A string formatted to display as a date MM/DD/YYYY
			* @returns {CitationSchema[]}
			*/
			getCitations: function(citationNumber, driversLicense, firstName, lastName, dateOfBirth) {
				var citations = window.localStorage.getItem('citations');
				if (window._.isEmpty(citations)) citations = undefined;
				else citations = JSON.parse(citations);

				// When searching for a specific citation, check locatStorage first
				if (!window._.isEmpty(citationNumber)) {
					var citation = window._.find(citations, {citation_number: citationNumber});

					if (citation) {
						return $q.when([citation]);
					}
				}

				return $resource('/citations', {
					citationNumber: citationNumber,
					driversLicense: driversLicense,
					firstName: firstName,
					lastName: lastName,
					dateOfBirth: dateOfBirth
				}).query().$promise
				.then(function (data) {
					// Once we have citations, add them to the localStorage for offline use later.
					window.localStorage.setItem('citations', JSON.stringify(data));
					console.log('test', data)
					return data;
				});
			},
			/**
			* Fetches violations by the associated citationNumber
			*
			* @param {Number} citationNumber
			* @returns {ViolationsSchema[]}
			*/
			getViolations: function(citationNumber) {
				return $resource('violations/:citationNumber', {
					citationNumber: citationNumber
				}).query().$promise
				.then(function(data) {
					window.localStorage.setItem('violations', JSON.stringify(data));
					return data;
				}, function() {
					// The API failed, check the localStorage for a backup (offline).
					var violations = window.localStorage.getItem('violations');
					if (window._.isEmpty(violations)) violations = undefined;
					else violations = JSON.parse(violations);

					violations = window._.filter(violations, {citation_number: citationNumber});
					return violations;
				});
			}
		};
	}
]);
