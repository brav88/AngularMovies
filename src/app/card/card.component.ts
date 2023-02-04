import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/model/movie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  movie!: Movie;

  @Output()
  movieSelected = new EventEmitter<Movie>();

  onCardClicked(){
    console.log("card Component onCardClicked");
    this.movieSelected.emit(this.movie);
  }

  isImageAvailable(){
    return this.movie && this.movie.Poster;
  }

  cardClasses(){
    return this.movie.Category;
  }
}
