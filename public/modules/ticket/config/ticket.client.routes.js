'use strict';

//Setting up route
angular.module('ticket').config(['$stateProvider',
	function($stateProvider) {
		// Ticket state routing
		$stateProvider.
		state('ticket', {
			url: '/ticket/:citationNumber?',
			templateUrl: 'modules/ticket/views/ticket.client.view.html'
		});
	}
]);
