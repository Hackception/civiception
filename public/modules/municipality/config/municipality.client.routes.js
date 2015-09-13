'use strict';

//Setting up route
angular.module('municipality').config(['$stateProvider',
	function($stateProvider) {
		// Municipality state routing
		$stateProvider.
		state('municipalities', {
			url: '/municipalities',
			templateUrl: 'modules/municipality/views/municipalities.client.view.html'
		});
	}
]);
