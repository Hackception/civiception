'use strict';

angular.module('municipality').controller('MunicipalityController', ['$scope', '$stateParams', 'Municipality',
	function($scope, $stateParams, municipalitySvc) {
		/* Declarations */
		$scope.model = {
			municipality: $stateParams.municipality
		};

		/* Initialization */
		municipalitySvc.fetchByMunicipality($scope.model.municipality)
			.then(function (data) {
				$scope.model.municipalityData = data;
				$scope.model.municipalityKeys = Object.keys(data);

				// Remove keys that are irrelevant
				$scope.model.municipalityKeys.splice($scope.model.municipalityKeys.indexOf('_id'), 1);
				$scope.model.municipalityKeys.splice($scope.model.municipalityKeys.indexOf('id'), 1);
				$scope.model.municipalityKeys.splice($scope.model.municipalityKeys.indexOf('$$Hashkey'), 1);
			});
	}
]);
