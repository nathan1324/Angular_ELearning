import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './course';

export class CourseData implements InMemoryDbService {
  createDb() {
    const courses: Course[] = [
      {
        id: 1,
        courseName: 'Course 1',
        courseCode: 'C101',
        description: 'This is an intro level course',
        totalChapters: 2,
        totalChapterSections: 2
      },
      {
        id: 2,
        courseName: 'Course 2',
        courseCode: 'C201',
        description: 'This is an intermediate level course',
        totalChapters: 3,
        totalChapterSections: 3
      },
      {
        id: 3,
        courseName: 'Course 3',
        courseCode: 'C301',
        description: 'This is an advanced level course',
        totalChapters: 4,
        totalChapterSections: 4
      },
      {
        id: 4,
        courseName: 'Course 4',
        courseCode: 'C401',
        description: 'This is an expert level course',
        totalChapters: 4,
        totalChapterSections: 4
      }
    ];
    return { courses };
  }
}
