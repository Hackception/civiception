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

		/* Initialization */
		var results = window.localStorage.getItem('ticket-results');
		if (window._.isEmpty(results)) invalidData();
		else results = JSON.parse(results);

		// Run a second time to catch cases like an empty array.
		if (window._.isEmpty(results)) invalidData();
		else $scope.model.results = results;
	}
]);
