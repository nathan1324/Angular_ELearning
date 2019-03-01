import { CourseChapter } from './course-chapter/course-chapter';

export interface Course {
  id: number;
  courseName: string;
  courseCode: string;
  description: string;
  chapter: CourseChapter[];
}

export interface CourseResolved {
  course: Course;
  error?: any;
}
