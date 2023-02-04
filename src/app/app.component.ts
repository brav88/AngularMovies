import { Component, Input } from '@angular/core';
import { moviesData } from '../data/movies.data';
import { Movie } from 'src/model/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourse';

  movies = moviesData;

  onMovieSelected(movie: Movie) {
    console.log("App Component onMovieSelected", movie);
  }
}

