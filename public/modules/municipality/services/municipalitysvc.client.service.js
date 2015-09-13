'use strict';

angular.module('municipality').factory('Municipality', [
	'$resource', '$q',
	function($resource, $q) {
		/* Declarations */
		var municipalities;

		/* Functions */
		/**
		 * Ensures we have data for municipalities stored.
		 */
		function fetchMunicipalities() {
			municipalities = $resource('/municipalities').query().$promise
				.then(function(data) {
					// Store the data for usage.
					municipalities = data;
					window.localStorage.setItem('municipalities', JSON.stringify(municipalities));
				}, function() {
					// Revert back to localStorage instead.
					municipalities = window.localStorage.getItem('municipalities');
					if (municipalities) municipalities = JSON.parse(municipalities);
					else municipalities = [];
				});
		}

		/* Initialization */
		fetchMunicipalities();

		// Public API
		return {
			fetchAll: function() {
				return $q.when(municipalities);
			},
			fetchByMunicipality: function(municipality) {
				return $q.when(municipalities)
					.then(function(munis) {
						return window._.filter(munis, {municipality: municipality});
					});
			}
		};
	}
]);
