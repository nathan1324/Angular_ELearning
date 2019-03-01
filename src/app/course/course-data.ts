import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './course';

export class CourseData implements InMemoryDbService {
  createDb() {
    const courses: Course[] = [
      {
        id: 1,
        courseName: 'Introduction to Algebra',
        courseCode: 'MTH-101',
        description: 'Learn the basics of Algebra',
        totalChapters: 2,
        totalChapterSections: 2
      },
      {
        id: 2,
        courseName: 'Advanced Algebra',
        courseCode: 'MTH-102',
        description: 'Explore more Algebra',
        totalChapters: 3,
        totalChapterSections: 3
      },
      {
        id: 3,
        courseName: 'Introduction to Calculus',
        courseCode: 'MTH-301',
        description: 'Learn the basics of Calculus',
        totalChapters: 4,
        totalChapterSections: 4
      },
      {
        id: 4,
        courseName: 'Driver Education',
        courseCode: 'CAR-101',
        description: 'Learn to drive',
        totalChapters: 4,
        totalChapterSections: 4
      },
      {
        id: 5,
        courseName: 'Angular Basics',
        courseCode: 'ANG-101',
        description: 'Learn angular basics',
        totalChapters: 4,
        totalChapterSections: 4
      }
    ];
    return { courses };
  }
}
