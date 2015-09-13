'use strict';

angular.module('municipality').controller('MunicipalitiesController', ['$scope', '$state', 'Municipality',
	function($scope, $state, municipalitySvc) {
		/* Declarations */
		$scope.model = {};

		/* Functions */
		/**
		 * Take the user to a page aboue the municipality.
		 */
		$scope.model.toMunicipality = function(municipality) {
			$state.go('municipality', {municipality: municipality});
		};
		$scope.model.toCourtWebsite = function ($event, municipality) {
			$event.stopPropagation();
			$event.preventDefault();
			window.location.href = municipality.municipal_court_website;
		};

		/* Initialization */
		municipalitySvc.fetchAll().then(
			function(munis) {
				$scope.model.municipalities = munis;
			}
		);
	}
]);
