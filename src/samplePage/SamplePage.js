angular.module( 'myApp.samplePage', [
  'ui.router', 
  'placeholders'
])

.config([
	'$stateProvider', 
	function config( $stateProvider ) {
  $stateProvider.state( 'samplePage', {
    url: '/samplePage',
    controller: 'SamplePage',
    templateUrl: 'src/samplePage/samplePage.html',
    data:{ pageTitle: 'Sample Page' }
  });
}])

.controller( 'SamplePage', function SamplePage( $scope ) {

});