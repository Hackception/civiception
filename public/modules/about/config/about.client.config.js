'use strict';

// About module config
angular.module('about').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar', 'About Us', 'about-us');
	}
]);
