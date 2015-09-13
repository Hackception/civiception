'use strict';

angular.module('municipality').controller('MunicipalitiesController', ['$scope', 'Municipality',
	function($scope, municipalitySvc) {
		/* Declarations */
		$scope.model = {};

		/* Initialization */
		municipalitySvc.fetchAll().then(
			function(munis) {
				$scope.model.municipalities = munis;
			}
		);
	}
]);
