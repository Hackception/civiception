'use strict';

//Setting up route
angular.module('municipality').config(['$stateProvider',
	function($stateProvider) {
		// Municipality state routing
		$stateProvider.
		state('municipality', {
			url: '/municipality/:municipality',
			templateUrl: 'modules/municipality/views/municipality.client.view.html'
		}).
		state('municipalities', {
			url: '/municipalities',
			templateUrl: 'modules/municipality/views/municipalities.client.view.html'
		});
	}
]);
