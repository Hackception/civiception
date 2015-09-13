'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;


		$scope.citationSearchModel = {
			firstName: null,
			lastName: null,
			dateOfBirth: null,
			licenseNumber: null,
			citationNumber: null
		};

		function isCitationSearchValid() {
			return $scope.citationSearch.$dirty && $scope.citationSearch.$valid;
		}

		function isLicenseSearchValid() {
			return $scope.licenseSearch.$dirty && $scope.licenseSearch.$valid;
		}

		function isNameSearchValid() {
			return $scope.nameSearch.$dirty && $scope.nameSearch.$valid;
		}

		function hasFormBeenUsed() {
			return !($scope.citationSearch.$pristine && $scope.licenseSearch.$pristine && $scope.nameSearch.$pristine);
		}

		$scope.isFormValid = function() {
			return (
				hasFormBeenUsed() && (
					isCitationSearchValid() ||
					isLicenseSearchValid() ||
					isNameSearchValid()
				)
			);
		}

	}
]);
