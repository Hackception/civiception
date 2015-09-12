'use strict';

//Setting up route
angular.module('court').config(['$stateProvider',
	function($stateProvider) {
		// Court state routing
		$stateProvider.
		state('court', {
			url: '/court',
			templateUrl: 'modules/court/views/court.client.view.html'
		});
	}
]);