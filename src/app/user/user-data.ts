import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

export class UserData implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 1,
        userName: 'user1',
        password: '123',
        isStudent: true
      }
    ];
    return { users };
  }
}
