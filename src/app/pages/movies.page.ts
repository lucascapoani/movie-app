import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss']
})
export class MoviesPage {
  currentYear = new Date().getFullYear();
  movies: Movie[] = [];
  editing = false;
  movie: Movie = this.emptyMovie();

  constructor(private movieService: MovieService) {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movies = this.movieService.getAll();
  }

  emptyMovie(): Movie {
    return {
      id: 0,
      title: '',
      description: '',
      genre: '',
      releaseYear: new Date().getFullYear(),
      rating: 0
    };
  }

  save(): void {
    if (this.editing) {
      this.movieService.update(this.movie);
    } else {
      this.movieService.add(this.movie);
    }
    this.clearForm();
    this.loadMovies();
  }

  edit(movie: Movie): void {
    this.movie = { ...movie };
    this.editing = true;
  }

  delete(id: number): void {
    this.movieService.delete(id);
    this.loadMovies();
  }

  clearForm(): void {
    this.movie = this.emptyMovie();
    this.editing = false;
  }
}
