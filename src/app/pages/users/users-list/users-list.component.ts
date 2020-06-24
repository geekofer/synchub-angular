import { Component, OnInit } from '@angular/core';
import { SynchubService } from 'src/app/services/synchub.service';
import { User, userStatus } from 'src/app/core/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public users: User[] = null;
  public isLoadingUsers: boolean;
  public searchText: string;

  constructor(private synchubService: SynchubService, private router: Router) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.isLoadingUsers = true;
    this.synchubService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
      this.isLoadingUsers = false;
    });
  }

  unSyncUser(user: User): void {
    user.status = userStatus.synchronizing;
    this.synchubService.deleteUser(user).then(() => {
      user.status = userStatus.notSynchronized;
      this.getAllUsers();
    });
  }

  onSearch(term: string) {
    this.searchText = term;
  }

  showProfile(user: User) {
    this.router.navigateByUrl('/users/user/' + user.login);
  }
}
