(function(){

  angular.module('myAlbomsApp')
    .component('myHeader', {
      templateUrl: "components/my-header/my-header.component.html",
      controller: navController
    });

  function navController($location) {
    var ctrl = this;
    ctrl.isActive = isActive;
    ctrl.toggleShowMenu = toggleShowMenu;
    ctrl.showMenu = false;
    
    function isActive(viewLocation) {
      return viewLocation === $location.path();
    }

    function toggleShowMenu(){
    	ctrl.showMenu = !ctrl.showMenu
    }
  }

})();