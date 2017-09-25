(function(){

  angular
    .module('myAlbomsApp')
    .component('viewMovieWindow', 
    {
      templateUrl: "components/view-movie-window/view-movie-window.component.html",
      controller: viewMovieController
    })
    .config(viewMovieConfig);


  function viewMovieConfig($sceProvider, $stateProvider) {
    $sceProvider.enabled(false);

    $stateProvider.state('view', {
      url: '/view',
      template: '<view-movie-window></view-movie-window>',
      params: {
        movie: null
      }
    });
  }

  function viewMovieController($state, $sce){
    var self = this;
    self.movie = $state.params.movie;
    self.movieURL = $sce.trustAsResourceUrl(self.movie.url);
  }

})();