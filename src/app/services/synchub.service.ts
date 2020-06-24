import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../core/user.model';

@Injectable({
  providedIn: 'root',
})
export class SynchubService {
  public api = environment.SYNCHUB_BASE_API;

  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api + '/users');
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.api + '/users', {
      login: user.login,
      avatar_url: user.avatar_url,
    });
  }

  public async deleteUser(user: User) {
    await this.getUserById(user).then((response: any) => {
      if (response && response.length > 0) {
        return this.http.delete<User>(this.api + '/users/' + response[0].id).toPromise();
      }
    });
  }

  public getUserById(user: User) {
    return this.http
      .get<User>(this.api + `/users?filter={"where":{"login":"${user.login}"}}`)
      .toPromise();
  }

  public async verifyIfUserExists(user: User) {
    return await this.http
      .get<User>(this.api + `/users?filter={"where":{"login":"${user.login}"}}`)
      .toPromise()
      .then((response: any) => {
        return !!response.length;
      });
  }
}
