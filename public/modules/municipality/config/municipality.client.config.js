'use strict';

// Municipality module config
angular.module('municipality').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar', 'Find a Municipality', 'municipalities', null, null, null, null, -10);
	}
]);
