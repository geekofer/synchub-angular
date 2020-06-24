import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../core/user.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  public api = environment.GITHUB_BASE_API;

  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api + '/users?since=1');
  }

  public async getUsersSince(id: number) {
    return await this.http.get<User[]>(this.api + '/users?since=' + id).toPromise();
  }

  public getUserDetailsByUsername(username: string) {
    return this.http.get<User[]>(this.api + '/users/' + username).toPromise();
  }
}
