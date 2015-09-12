'use strict';

//Setting up route
angular.module('ticket').config(['$stateProvider',
	function($stateProvider) {
		// Ticket state routing
		$stateProvider.
		state('ticket-details', {
			url: '/ticket/details/:citationNumber',
			templateUrl: 'modules/ticket/views/ticket-details.client.view.html'
		}).
		state('ticket', {
			url: '/ticket',
			templateUrl: 'modules/ticket/views/ticket.client.view.html'
		}).
		state('ticket-search', {
			url: '/ticket/search',
			templateUrl: 'modules/ticket/views/ticket-search.client.view.html'
		});
	}
]);
