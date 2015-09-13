'use strict';

angular.module('core').filter('startFrom', [
	function() {
		return function (input, start) {
			if (input) {
				start = +start;
				return input.slice(start);
			}
			return [];
		};
	}
]);
