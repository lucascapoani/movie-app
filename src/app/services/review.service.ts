import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private reviews: Review[] = [];

  getByMovie(movieId: number): Review[] {
    return this.reviews.filter(r => r.movieId === movieId);
  }

  add(review: Review): void {
    this.reviews.push({ ...review, id: Date.now(), date: new Date().toISOString() });
  }
}
