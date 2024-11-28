import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, Login, SignUp } from '../../models/models';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../enpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(ENDPOINTS.LOGIN, login);
  }

  signUp(signUp: SignUp): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(ENDPOINTS.SIGN_UP, signUp);
  }
}
