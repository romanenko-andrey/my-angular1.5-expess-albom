(function(){
  angular
    .module('myAlbomsApp')
    .component('about', 
    {
      templateUrl: "components/about/about.component.html"
    })
    .config(aboutConfig);

  function aboutConfig($stateProvider) {
    $stateProvider.state('about', {
      url: '/about',
      template: '<about></about>'
    });
  }
})();