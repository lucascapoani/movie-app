import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private fakeUser = { id: 1, name: 'João', email: 'joao@email.com', password: '123456' };

  login(email: string, password: string): boolean {
    if (email === this.fakeUser.email && password === this.fakeUser.password) {
      localStorage.setItem('token', 'fake-jwt-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
