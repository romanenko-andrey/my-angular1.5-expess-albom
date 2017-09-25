(function(){

  angular.module('myAlbomsApp', [
    'ui.router',
    'ui.bootstrap',
    "ngStorage",
    "ui.bootstrap.modal"
  ])
    .config(myAppConfig)
    .run(myAppRun);

  function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state('clear_local_storage', {
      url: '/clear_local_storage',
      controller: function($state, $localStorage){
        this.$onInit = function(){
          if (window.confirm("Do you really want to clear all alboms from you PC?")){
            $localStorage.alboms = undefined; 
            $state.go('main');
          }
        }
      }
    })
  }
      
  function myAppRun(){
  }

})();

