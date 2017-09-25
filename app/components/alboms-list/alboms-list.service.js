(function () {

  angular.module('myAlbomsApp')
    .service('albomsListService', albomsListService);

  function albomsListService($http, $log, $q, $localStorage) {
    var self = this;

    self.alboms = undefined;
    self.selectedAlbom = undefined;
    self.getAlboms = getAlboms;
    self.saveData = saveData;
    self.restoreData = restoreData;
    self.deleteAlbom = deleteAlbom;
    self.deleteMovie = deleteMovie;
    self.addAlbom = addAlbom;
    self.addMovieToCurrentAlbom = addMovieToCurrentAlbom;
    self.saveToLocalStorage = saveToLocalStorage;

    function getAlboms() {
      var deferred = $q.defer();
     
      if ($localStorage.alboms === undefined) {
        $http.get("resources/alboms.json")
          .then(function (response) {
            $log.log(response);
            self.alboms = response.data;
            self.selectedAlbom = self.alboms[0];
            for (var i = 0; i < self.alboms.length; i++) {
               self.alboms[i].size = self.alboms[i].list.length
            };

            deferred.resolve(self.alboms);
          }, function(error) {
            $log.error(error);
            deferred.reject(error);
          })
      } else {
        self.alboms = $localStorage.alboms;
        deferred.resolve(self.alboms);
      }
      return deferred.promise;
    }

    function saveData(data){
      return JSON.stringify(data)
    }

    function saveToLocalStorage(){
      $localStorage.alboms = self.alboms;
    }

    function restoreData(savedData){
      data = JSON.parse(savedData)
      self.selectedAlbom.title = data.title;
      self.selectedAlbom.about = data.about;
      self.selectedAlbom.rating = data.rating;
      self.saveToLocalStorage();
    }

    function deleteAlbom(albom){
      var copy = [];
      for (var i = 0; i < self.alboms.length; i++) {
         if (self.alboms[i].title != albom.title &&
            self.alboms[i].about != albom.about) 
              copy.push(self.alboms[i]) 
      };
      self.alboms = copy; 
      self.saveToLocalStorage();
    }

    function deleteMovie(albom, movie){
      var copy = [];
      for (var i = 0; i < albom.list.length; i++) {
        if (albom.list[i].url != movie.url) 
          copy.push(albom.list[i]) 
      };
      albom.list = copy; 
      albom.size = copy.length; 
      self.saveToLocalStorage(); 
    }

    function addAlbom(name){
      self.alboms.push({title : name, rating: 0, list : [], size : 0});
      self.saveToLocalStorage();
    }

    function addMovieToCurrentAlbom(name, url){
      self.selectedAlbom.list.push({title: name, url: url, rating:0});
      self.selectedAlbom.size++;
      self.saveToLocalStorage();
    }
  }

})();