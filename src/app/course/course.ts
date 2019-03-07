import { CourseChapter } from './course-chapter/course-chapter';

export interface Course {
  id: number;
  courseName: string;
  courseCode: string;
  description: string;
}

export interface CourseResolved {
  course: Course;
  error?: any;
}
