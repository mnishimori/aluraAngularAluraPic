import {Injectable} from '@angular/core';
import {TokenService} from '../token/token.service';
import {BehaviorSubject} from 'rxjs';
import {User} from './user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  public setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }
}
