import { ChapterSection } from './chapter-section/chapter-section';

export interface CourseChapter {
  chapterId: number;
  chapterName: string;
  chapterSection: ChapterSection[];
}
