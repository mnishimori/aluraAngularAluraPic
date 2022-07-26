import {Injectable} from '@angular/core';
import {TokenService} from '../token/token.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  getUser(): Observable<User>{
    return this.userSubject.asObservable();
  }

  public setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  logout(): void {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  logged(): boolean {
    return this.tokenService.hasToken();
  }

  getUserName(): string {
    return this.userName;
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }
}
