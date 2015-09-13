'use strict';

angular.module('ticket').controller('TicketDetailsController', ['$scope', '$state', '$stateParams', 'Ticket',
	function($scope, $state, $stateParams, ticketSvc) {
		/* Declarations */
		$scope.model = {
			citationNumber: $stateParams.citationNumber
		};

		/* Functions */
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
		}
		/**
		 * Handle storing the violations and failing safely.
		 *
		 * @param {ViolationsSchema[]} violations
		 */
		function processViolations(violations) {
			$scope.model.violations = violations;
		}

		/* Initialization */
		ticketSvc.getCitations($scope.model.citationNumber)
		.then(processCitations, invalidData);
		ticketSvc.getViolations($scope.model.citationNumber)
		.then(processViolations, invalidData);
	}
]);
