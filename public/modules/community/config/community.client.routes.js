'use strict';

//Setting up route
angular.module('community').config(['$stateProvider',
	function($stateProvider) {
		// Community state routing
		$stateProvider.
		state('community', {
			url: '/community',
			templateUrl: 'modules/community/views/community.client.view.html'
		});
	}
]);