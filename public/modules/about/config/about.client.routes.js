'use strict';

//Setting up route
angular.module('about').config(['$stateProvider',
	function($stateProvider) {
		// About state routing
		$stateProvider.
		state('about', {
			url: '/about-us',
			templateUrl: 'modules/about/views/about.client.view.html'
		});
	}
]);