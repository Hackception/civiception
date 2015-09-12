'use strict';

module.exports = {
	app: {
		title: 'Civiception',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/vendor/vendor/rs-plugin/css/settings.css',
				'public/vendor/vendor/rs-plugin/css/extralayer.css',
				'public/vendor/vendor/flat-icon/flaticon.css',
				'public/vendor/vendor/font-awesome/css/font-awesome.min.css',
				'public/vendor/vendor/owl/css/owl.carousel.css',
				'public/vendor/vendor/owl/css/owl.theme.default.css',
				'public/vendor/vendor/owl/css/owl.theme.css',
				'public/vendor/vendor/mmenu/css/jquery.mmenu.css',
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				// 'public/vendor/vendor/bootstrap/dist/css/bootstrap.css',
				// 'public/vendor/vendor/bootstrap/dist/css/bootstrap-theme.css',
				'public/vendor/css/animate.css',
				'public/vendor/css/hover.css',
				'public/vendor/css/style.css',
				'public/vendor/css/responsive.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/lodash/lodash.js',
				'public/vendor/js/jquery-1.11.1.js',
				'public/vendor/js/modernizr-2.6.2.min.js',
				'public/vendor/vendor/bootstrap/js/bootstrap.min.js',
				'public/vendor/vendor/rs-plugin/js/jquery.themepunch.plugins.min.js',
				'public/vendor/vendor/rs-plugin/js/jquery.themepunch.revolution.js',
				'public/vendor/js/jquery.shuffle.min.js',
				'public/vendor/vendor/mmenu/js/jquery.mmenu.min.js',
				'public/vendor/vendor/owl/js/owl.carousel.min.js',
				'public/vendor/js/wow.min.js',
				'public/vendor/js/jquery.counterup.min.js',
				'public/vendor/js/jquery.easing.min.js',
				'public/vendor/js/scrolling-nav.js',
				'public/vendor/js/smoothscroll.min.js',
				'public/vendor/js/script.js',
				'public/vendor/js/email.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
