import { Pipe, PipeTransform } from '@angular/core';

import { User, userStatus } from 'src/app/core/user.model';
import { SynchubService } from 'src/app/services/synchub.service';

@Pipe({
  name: 'userVerification',
})
export class UserVerificationPipe implements PipeTransform {
  constructor(private synchubService: SynchubService) {}

  transform(items: User[]) {
    const synchronizedUsers: User[] = [];

    if (!items) {
      return items;
    }

    items.forEach(async (user) => {
      this.synchubService.verifyIfUserExists(user).then((response) => {
        synchronizedUsers.push({
          ...user,
          status: !!response ? userStatus.syncronized : userStatus.notSynchronized,
        });
      });
    });

    return synchronizedUsers;
  }
}
