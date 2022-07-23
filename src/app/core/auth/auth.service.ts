import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {TokenService} from '../token/token.service';

const API_URL = 'http://localhost:3000/user/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  authenticate(userName: string, password: string): Observable<any> {
    return this.http.post(API_URL, {userName, password}, { observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.tokenService.setToken(authToken);
        console.log('Usuário ' + userName + ' autenticado com o token ' + authToken);
      }));
  }
}
