'use strict';

angular.module('ticket').controller('TicketController', ['$scope', '$state', '$stateParams', 'Ticket', 'Municipality',
	function($scope, $state, $stateParams, ticketSvc, Municipality) {
		/* Declarations */
		$scope.model = {
			citationNumber: $stateParams.citationNumber,
			currentPage: 1,
			maxSize: 10,
			itemsPerPage: 3
		};

		/* Functions */
		$scope.hasWarrant = function (citation) {
			return !window._.isEmpty(window._.find(citation.violations, {warrant_status: 'TRUE'}));
		};

		$scope.isEligibleForService = function (citation) {
			return citation.community_service_eligibility;
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
			// return true;
		};

		$scope.goToWebsite = function ($event, citation) {
			$event.preventDefault();
			$event.stopPropagation();

			window.location.href = citation.pay_online;
		};

		$scope.getTotal = function(violation) {
			return Number(violation.fine_amount) + Number(violation.court_cost);
		};

		$scope.hasWarrantViolation = function (violation) {
			return violation.warrant_status === 'TRUE';
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
				Municipality.fetchByMunicipality(c.court_location).then(function (m) {
					if (c.citation_number === 51327032) {console.log(m)}
					if (m.municipal_court_website && m.online_payment_system_provider) {
						c.pay_online = m.municipal_court_website;
					}
				});
			});
		}

		/* Initialization */
		ticketSvc.getCitations($scope.model.citationNumber)
		.then(processCitations, invalidData);

	}
]);
