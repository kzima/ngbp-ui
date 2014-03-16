angular.module( 'myApp', [
  'myApp.home',
  'myApp.samplePage',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function ($rootScope, $state, $stateParams) {
  // It's very handy to add references to $state and $stateParams to the $rootScope
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Angular Seed' ;
    }
  });
});