'use strict';

angular.module('ticket').controller('TicketController', ['$scope', '$state', '$stateParams', 'Ticket',
	function($scope, $state, $stateParams, ticketSvc) {
		/* Declarations */
		$scope.model = {
			citationNumber: $stateParams.citationNumber,
			currentPage: 1,
			maxSize: 10,
			itemsPerPage: 3
		};

		/* Functions */
		$scope.hasWarrant = function (citation) {
			return citation.warrant_status === 'TRUE';
			// return true;
		};

		$scope.getBalance = function (citation) {
			if (citation.total_fine) { return citation.total_fine; }

			var total = window._.sum(citation.violations, function (v) {
				return Number(v.fine_amount) + Number(v.court_cost);
			});
			citation.total_fine = total;
			return total;
		};

		$scope.hasOutstandingBance = function (citation) {
			return $scope.getBalance(citation) > 0;
		};

		/**
		 * Directs the user away from the details page with a nice message.
		 */
		function invalidData() {
			// TODO: Add a modal to warn the user we failed them and they are headed back to the search page.
			$state.go('home');
		}
		/**
		 * Handle storing the citations and failing safely.
		 *
		 * @param {CitationsSchema[]} citations
		 */
		function processCitations(citations) {
			if (window._.isEmpty(citations)) invalidData();

			$scope.model.citations = citations;
			window._.forEach(citations, function (c) {
				ticketSvc.getViolations(c.citation_number)
					.then(function (violations) {
						c.violations = violations;
					}, invalidData);
			});
		}

		/* Initialization */
		ticketSvc.getCitations($scope.model.citationNumber)
		.then(processCitations, invalidData);

	}
]);
