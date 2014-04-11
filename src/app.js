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

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $state, $window ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Angular Seed' ;
    }
  });

  // use this for routing anywhere in the app especially in controllers 
  // (no need to injectect $state everywhere)
  $scope.goTo = function(route, params){
    //console.log(route);
    $state.go(route, params);
  };

  // global variable to tell us if user is using small screen devices
  // it matches Twitter Bootstrap sm minimum size
  $scope.isMobile = ($window.screen.width < 768);

});