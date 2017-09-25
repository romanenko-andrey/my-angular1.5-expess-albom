(function() {
  "use strict";

  angular.module("myAlbomsApp")
    .component("movieRating", {
      templateUrl: "components/alboms-list/movie-rating/movie-rating.component.html",
      controller: movieRatingController,
      transclude: true,
      bindings: {
        value: "<"
    }
  });

  function movieRatingController() {
    var ctrl = this;
    ctrl.$onInit = () => ctrl.entries = new Array(ctrl.value);  
    ctrl.$onChanges =  () => ctrl.entries = new Array(ctrl.value);
  }        

}());