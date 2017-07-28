export class HomeController {
  constructor(movieService, $state) {
  this.$state = $state;
  this.movieService = movieService;
  this.movies = movieService.listMovies();
  }

addMovie(form) {
  if(form.title === false) {
    alert('please enter title');
  } else if(form.director === false) {
    alert('please enter director');
  } else {
     this.movieService.saveMovie(this.movie).then(() => {
        this.$state.go('success');
    })
  }
}

deleteMovie(id){
  this.movieService.removeMovie(id).then(() => {
    this.$state.go('success');
  })
 }

}

HomeController.$inject = ['movieService', '$state'];

export class AboutController {
  constructor() {
    this.message = 'about page';
  }
}
