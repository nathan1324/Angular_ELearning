export interface CourseChapter {
  chapterId: number;
  chapterName: string;
  courseId: number;
}

export interface ChapterResolved {
  chapter: CourseChapter;
  error?: any;
}
