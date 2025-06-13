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
  searchTerm = '';

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
      alert('Filme atualizado com sucesso!');
    } else {
      this.movieService.add(this.movie);
      alert('Filme adicionado com sucesso!');
    }
    this.clearForm();
    this.loadMovies();
  }

  edit(movie: Movie): void {
    this.movie = { ...movie };
    this.editing = true;
  }

  delete(id: number): void {
    if (confirm('Deseja realmente excluir este filme?')) {
      this.movieService.delete(id);
      this.loadMovies();
    }
  }

  clearForm(): void {
    this.movie = this.emptyMovie();
    this.editing = false;
  }

  get filteredMovies(): Movie[] {
    const term = this.searchTerm.toLowerCase().trim();
    return this.movies.filter(m => m.title.toLowerCase().includes(term));
  }
}
