'use strict';

// Core module config
angular.module('core').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar', 'Find a Citation', 'home', null, null, null, null, -10);
	}
]);
