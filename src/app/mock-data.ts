import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './course/course';
<<<<<<< HEAD
import { User } from './user/user';
import { UserCourse } from './user/user-course/user-course';

=======
import { CourseChapter } from './course/course-chapter/course-chapter';
import { ChapterSection } from './course/course-chapter/chapter-section/chapter-section';
>>>>>>> 72a98ac75d6955b7812a1fbc83f891cd884dc991

export class MockData implements InMemoryDbService {
  createDb() {
    const courses: Course[] = [
      {
        id: 1,
        courseName: 'Introduction to Algebra',
        courseCode: 'MTH-101',
<<<<<<< HEAD
        description: 'Learn the basics of Algebra',
        chapter: []
=======
        description: 'Learn the basics of Algebra'
>>>>>>> 72a98ac75d6955b7812a1fbc83f891cd884dc991
      },
      {
        id: 2,
        courseName: 'Advanced Algebra',
        courseCode: 'MTH-102',
<<<<<<< HEAD
        description: 'Explore more Algebra',
        chapter: []
=======
        description: 'Explore more Algebra'
>>>>>>> 72a98ac75d6955b7812a1fbc83f891cd884dc991
      },
      {
        id: 3,
        courseName: 'Introduction to Calculus',
        courseCode: 'MTH-301',
<<<<<<< HEAD
        description: 'Learn the basics of Calculus',
        chapter: []
=======
        description: 'Learn the basics of Calculus'
>>>>>>> 72a98ac75d6955b7812a1fbc83f891cd884dc991
      },
      {
        id: 4,
        courseName: 'Driver Education',
        courseCode: 'CAR-101',
<<<<<<< HEAD
        description: 'Learn to drive',
        chapter: []
=======
        description: 'Learn to drive'
>>>>>>> 72a98ac75d6955b7812a1fbc83f891cd884dc991
      },
      {
        id: 5,
        courseName: 'Angular Basics',
        courseCode: 'ANG-101',
<<<<<<< HEAD
        description: 'Learn angular basics',
        chapter: []
      }
    ];
    const users: User[] = [
      {
        id: 1,
        userName: 'user1',
        password: '123',
        isStudent: true
      }
    ];
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
    return { courses, users, userCourses };
=======
        description: 'Learn angular basics'
      }
    ];
    const chapters: CourseChapter[] = [
      {
        chapterId: 1,
        chapterName: 'Introduction to Algebra - Chapter 1',
        courseId: 1
      },
      {
        chapterId: 2,
        chapterName: 'Introduction to Algebra - Chapter 2',
        courseId: 1
      },
      {
        chapterId: 3,
        chapterName: 'Introduction to Algebra - Chapter 3',
        courseId: 1
      },
      {
        chapterId: 4,
        chapterName: 'Advanced Algebra - Chapter 1',
        courseId: 2
      },
      {
        chapterId: 5,
        chapterName: 'Advanced Algebra - Chapter 2',
        courseId: 2
      },
      {
        chapterId: 6,
        chapterName: 'Advanced Algebra - Chapter 3',
        courseId: 2
      },
      {
        chapterId: 7,
        chapterName: 'Advanced Algebra - Chapter 4',
        courseId: 2
      },
      {
        chapterId: 8,
        chapterName: 'Advanced Algebra - Chapter 5',
        courseId: 2
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
>>>>>>> 72a98ac75d6955b7812a1fbc83f891cd884dc991
  }
}
