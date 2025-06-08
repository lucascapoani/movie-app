import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html'
})
export class TestComponent {
  movies: Movie[] = [];
  isLoggedIn = false;

  constructor(
    private movieService: MovieService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.movies = this.movieService.getAll();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  login(): void {
    this.authService.login('joao@email.com', '123456');
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
