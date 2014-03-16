angular.module( 'myApp.template', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config([
	'$stateProvider', 
	function config( $stateProvider ) {
	$stateProvider.state( 'template', {
		url: '/template',
		controller: 'TemplateCtrl',
		templateUrl: 'src/template/template.html',
		data:{ pageTitle: 'Template' }
	});
}])

/**
 * And of course we define a controller for our route.
 */
.controller( 'TemplateCtrl', ['$scope', function TemplateController( $scope ) {

}]);