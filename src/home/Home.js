angular.module( 'myApp.home', [
  'ui.router', 
  'placeholders.txt'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config([
	'$stateProvider', 
	function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/home',
		controller: 'HomeCtrl',
		templateUrl: 'src/home/home.html',
		data:{ pageTitle: 'Home' }
	});
}])

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {

});