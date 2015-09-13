'use strict';

angular.module('municipality').filter('prettyText', [
	function() {
		return function(input) {
			// Replace underscores with spaces
			input = input.replace(/_/g, ' ')
				// Capitalization
				.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

			return input;
		};
	}
]);
