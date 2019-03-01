import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserCourse } from './user-course';

export class UserCourseData implements InMemoryDbService {
  createDb() {
    const userCourses: UserCourse[] = [
      {
        userID: 1,
        courseID: 1
      },
      {
        userID: 1,
        courseID: 2
      },
      {
        userID: 1,
        courseID: 3
      }
    ];
    return { UserCourse };
  }
}
