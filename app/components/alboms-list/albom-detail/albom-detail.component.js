(function(){

angular.module('myAlbomsApp')
  .component('albomDetail', {
    templateUrl: "components/alboms-list/albom-detail/albom-detail.component.html",
    controller: albomDetailController,
    controllerAs: '$ad',
    bindings: {
      albom: '=',
    }
  });

function albomDetailController($state, albomsListService) {
  var self = this;

  self.orderBy = 'name';
  self.sortClass= 'sort-asc';
  self.columns = ['title', 'about', 'url', 'rating'];

  self.sort = sort;
  self.empty = emptyCheck;
  self.selectMovie = selectMovie;
  self.editMovie = editMovie;
  self.deleteMovie = deleteMovie;
  self.addMovie = addMovie;
  self.playMovie = playMovie;
  self.close = close;

  self.showDetailInfo = ($index) => self.row === $index;

  function close(){
    self.editedMovie = undefined; 
    self.selectedMovie = undefined;
  }


  function sort(attribute) {
    self.sortClass = 'sort-asc'; // down arrow
    var newOrderBy = attribute;
    if (self.orderBy === attribute) {
      newOrderBy = '-' + attribute;
      self.sortClass = 'sort-desc'; // up arrow
    }
    self.orderBy = newOrderBy;
  }

  function emptyCheck(){
    if (self.albom){
      if (self.albom.list.length === 0)
        return true
    } else {
      return true;
    }
    return false
  }

  function editMovie(ev, movie){
    ev.stopPropagation();
    self.editedMovie = movie;
  }

  function selectMovie(movie) {
    self.editedMovie = undefined; 
    self.selectedMovie = movie;
  }

  function deleteMovie(albom, movie){
    albomsListService.deleteMovie(albom, movie);
    self.editedMovie = self.selectedMovie = undefined;
  }

  function addMovie(){
    albomsListService.addMovieToCurrentAlbom(self.newMovieName, self.newMovieURL);
    self.newMovieName = self.newMovieURL = '';
  }

  function playMovie(movie){
    $state.go('view', {movie: movie})
  }


}

})();