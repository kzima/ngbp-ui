angular.module( 'virgin._template', [

])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config( function config( $stateProvider ) {
	$stateProvider.state( '_template', {
		url: '/_template',
		controller: '_TemplateCtrl',
		templateUrl: settings.assetsUrl + 'src/_template/_template.html',
		data:{ pageTitle: '_Template' }
	});
})

/**
 * Binds models with the scope variables
 * @param  {Object} $scope   
 */
.controller( '_TemplateCtrl', function ( $scope ) {

});