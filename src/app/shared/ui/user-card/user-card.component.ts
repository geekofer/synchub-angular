import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, userStatus } from 'src/app/core/user.model';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Output()
  sync = new EventEmitter<User>();

  @Output()
  unSync = new EventEmitter<User>();

  @Output()
  showProfile = new EventEmitter<User>();

  syncStatus = userStatus;

  constructor() {}

  ngOnInit() {}

  onSync(user: User): void {
    this.sync.emit(user);
  }

  onUnSync(user: User): void {
    this.unSync.emit(user);
  }

  onShowDetails(user: User): void {
    this.showProfile.emit(user);
  }
}
