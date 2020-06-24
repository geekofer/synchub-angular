import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, userStatus } from 'src/app/core/user.model';
import { GithubService } from 'src/app/services/github.service';
import { SynchubService } from 'src/app/services/synchub.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public login: string;
  public user: User = null;
  public isLoadingUser: boolean;
  public options = {
    height: '350',
    plotOptions: {
      outerRadius: 80,
      innerRadius: 60,
    },
    legend: {
      labelEllipsisSize: 16,
    },
  };

  public chartData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GithubService,
    private synchubService: SynchubService
  ) {
    this.login = this.activatedRoute.snapshot.paramMap.get('login');
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.isLoadingUser = true;
    this.githubService.getUserDetailsByUsername(this.login).then((user: any) => {
      this.user = user;
      this.chartData = [
        {
          name: 'Followers',
          data: user.followers,
        },
        {
          name: 'Following',
          data: user.following,
        },
        {
          name: 'Public Gists',
          data: user.public_gists,
        },
        {
          name: 'Public Repos',
          data: user.public_repos,
        },
      ];
      this.isLoadingUser = false;
    });
  }

  unSyncUser(user: User): void {
    user.status = userStatus.synchronizing;
    this.synchubService.deleteUser(user).then(() => {
      user.status = userStatus.notSynchronized;
    });
  }
}
