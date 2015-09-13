'use strict';

angular.module('municipality').filter('linkMe', [
	function() {
		return function(input) {
			// Check to see if the input is a link
			if (input !== null && input.indexOf('http') > -1 && input.indexOf('N/A') === -1) {
				// Convert to a link
				input = '<a href="' + input + '">' + input + '</a>';
			}

			return input;
		};
	}
]);
