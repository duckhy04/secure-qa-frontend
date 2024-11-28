import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

const TOKEN = "token";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveToken(token: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  signOut(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(TOKEN);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(TOKEN);
    }

    return null;
  }

  decodedToken(): any | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwt_decode.jwtDecode(token);
      } catch (error) {
        console.error('Invalid token', error);
        return null;
      }
    }
    return null;
  }

  getUsername(): string | null {
    const decoded = this.decodedToken();
    return decoded ? decoded.sub || decoded.username || null : null;
  }

  getRole(): string[] | string | null {
    const decoded = this.decodedToken();
    return decoded ? decoded.roles || decoded.role || null : null;
  }
}
