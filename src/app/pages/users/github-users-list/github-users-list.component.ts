import { Component, OnInit } from '@angular/core';

import { User, userStatus } from 'src/app/core/user.model';

import { GithubService } from 'src/app/services/github.service';
import { SynchubService } from 'src/app/services/synchub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-users-list',
  templateUrl: './github-users-list.component.html',
  styleUrls: ['./github-users-list.component.scss'],
})
export class GithubUsersListComponent implements OnInit {
  public githubUsers: any[] = [];

  public isLoadingGithubUsers: boolean;

  constructor(
    private githubService: GithubService,
    private synchubService: SynchubService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllGithubUsers();
  }

  getAllGithubUsers(): void {
    this.isLoadingGithubUsers = true;
    this.githubService.getAllUsers().subscribe((users: User[]) => {
      this.githubUsers = users;
      this.isLoadingGithubUsers = false;
    });
  }

  syncUser(user: User): void {
    user.status = userStatus.synchronizing;
    this.synchubService.createUser(user).subscribe(() => {
      user.status = userStatus.syncronized;
    });
  }

  unSyncUser(user: User): void {
    user.status = userStatus.synchronizing;
    this.synchubService.deleteUser(user).then(() => {
      user.status = userStatus.notSynchronized;
    });
  }

  loadMoreUsers() {
    const lastUserOfList: User = this.githubUsers[this.githubUsers.length - 1];
    this.githubService.getUsersSince(lastUserOfList.id).then((users: User[]) => {
      this.githubUsers = users;
    });
  }

  showProfile(user: User) {
    this.router.navigateByUrl('/users/user/' + user.login);
  }
}
