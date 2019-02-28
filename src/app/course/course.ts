export interface Course {
  id: number;
  courseName: string;
  courseCode: string;
  description: string;
  totalChapters: number;
  totalChapterSections: number;
}

export interface CourseResolved {
  course: Course;
  error?: any;
}
