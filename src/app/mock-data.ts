import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './course/course';
import { CourseChapter } from './course/course-chapter/course-chapter';
import { ChapterSection } from './course/course-chapter/chapter-section/chapter-section';

export class MockData implements InMemoryDbService {
  createDb() {
    const courses: Course[] = [
      {
        id: 1,
        courseName: 'Introduction to Algebra',
        courseCode: 'MTH-101',
        description: 'Learn the basics of Algebra'
      },
      {
        id: 2,
        courseName: 'Advanced Algebra',
        courseCode: 'MTH-102',
        description: 'Explore more Algebra'
      },
      {
        id: 3,
        courseName: 'Introduction to Calculus',
        courseCode: 'MTH-301',
        description: 'Learn the basics of Calculus'
      },
      {
        id: 4,
        courseName: 'Driver Education',
        courseCode: 'CAR-101',
        description: 'Learn to drive'
      },
      {
        id: 5,
        courseName: 'Angular Basics',
        courseCode: 'ANG-101',
        description: 'Learn angular basics'
      }
    ];
    const chapters: CourseChapter[] = [
      {
        chapterId: 1,
        chapterName: 'Algebra - Chapter 1',
        courseId: 1
      },
      {
        chapterId: 2,
        chapterName: 'Algebra - Chapter 2',
        courseId: 1
      },
      {
        chapterId: 3,
        chapterName: 'Algebra - Chapter 3',
        courseId: 1
      },
    ];
    const sections: ChapterSection[] = [
      {
        sectionId: 1,
        sectionName: 'Algebra - Chapter 1 - Section 1',
        sectionContent: 'Insert content here for section 1 here',
        chapterId: 1
      },
      {
        sectionId: 2,
        sectionName: 'Algebra - Chapter 1 - Section 2',
        sectionContent: 'Insert content here for section 2 here',
        chapterId: 1
      },
      {
        sectionId: 3,
        sectionName: 'Algebra - Chapter 1 - Section 3',
        sectionContent: 'Insert content here for section 3 here',
        chapterId: 1
      },
    ];
    return { courses, chapters, sections };
  }
}
