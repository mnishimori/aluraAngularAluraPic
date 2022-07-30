import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewUser} from './new-user';
import {Observable} from 'rxjs';
import {User} from '../../core/user/user';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string){
    return this.http.get(`${API_URL}/user/exists/${userName}`);
  }

  signUp(user: NewUser): Observable<User> {
    return this.http.post<User>(`${API_URL}/user/signup`, user);
  }
}
