'use strict';

angular.module('ticket').controller('TicketResultsController', ['$scope', '$state',
	function($scope, $state) {
		/* Declarations */
		$scope.model = {};

		/* Functions */
		/**
		 * There's no search results, send the user back to the search page.
		 */
		function invalidData() {
			// TODO: inform the user we're missing data before the redirect.
			$state.go('home');
		}
		/**
		 * Navigates to the citation details for a given citationNumber.
		 *
		 * @param {Number} citationNumber
		 */
		$scope.citationDetails = function(citationNumber) {
			$state.go('ticket-details', {citationNumber: citationNumber});
		};

		/* Initialization */
		var results = window.localStorage.getItem('citations');
		if (window._.isEmpty(results)) invalidData();
		else results = JSON.parse(results);

		// Run a second time to catch cases like an empty array.
		if (window._.isEmpty(results)) invalidData();

		if (results.length === 1) $scope.citationDetails(results[0].citation_number);
		else $scope.model.results = results;
	}
]);
