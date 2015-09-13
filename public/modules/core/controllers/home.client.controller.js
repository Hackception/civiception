'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'Ticket', '$state', '$q',
	function($scope, Authentication, Ticket, $state, $q) {
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
		};

		$scope.searchCitations = function () {
			if (!$scope.isFormValid()) { return; }

			Ticket.getCitations(
				$scope.citationSearchModel.citationNumber,
				$scope.citationSearchModel.licenseNumber,
				$scope.citationSearchModel.firstName,
				$scope.citationSearchModel.lastName,
				$scope.citationSearchModel.dateOfBirth
			).then(function (citations) {
				if (!window._.isEmpty(citations)) {
					$state.go('ticket');
				} else {
					return $q.reject('No results were found');
				}
			}).catch(function (error) {
				if (window._.isString(error)) {
					$scope.error = error;
				} else {
					$scope.error = 'Unknown Error';
				}
			});
		};

	}
]);
