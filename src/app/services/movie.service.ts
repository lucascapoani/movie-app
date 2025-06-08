import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movies: Movie[] = [
    { id: 1, title: 'Matrix', description: 'Sci-fi clássico', genre: 'Ficção', releaseYear: 1999, rating: 4.8 },
    { id: 2, title: 'O Senhor dos Anéis', description: 'Fantasia épica', genre: 'Aventura', releaseYear: 2001, rating: 4.9 },
  ];

  getAll(): Movie[] {
    return this.movies;
  }

  getById(id: number): Movie | undefined {
    return this.movies.find(m => m.id === id);
  }

  add(movie: Movie): void {
    this.movies.push({ ...movie, id: Date.now() });
  }

  update(movie: Movie): void {
    const index = this.movies.findIndex(m => m.id === movie.id);
    if (index > -1) this.movies[index] = movie;
  }

  delete(id: number): void {
    this.movies = this.movies.filter(m => m.id !== id);
  }
}
