export class MovieService {

   constructor($resource) {
     this.MovieResource = $resource('/api/movies/:id');
   }


   saveMovie(movie) {
     return this.MovieResource.save(movie).$promise;
   }

  listMovies() {
    return this.MovieResource.query();
  }

removeMovie(id) {
  return this.MovieResource.delete({id: id}).$promise;
  }

}

MovieService.$inject = ['$resource'];
