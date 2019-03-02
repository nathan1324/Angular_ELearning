import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course.component';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { ChapterResolved, CourseChapter } from './course-chapter';

@Component({
  selector: 'epl-course-chapter-content',
  templateUrl: './course-chapter-content.component.html',
  styleUrls: ['./course-chapter-content.component.scss']
})
export class CourseChapterContentComponent implements OnInit {
  pageTitle;
  chapter: CourseChapter;
  errorMessage: string;

  chapters: CourseChapter[] = [];

  constructor(public courseService: CourseService,
              public route: ActivatedRoute) {
}

  ngOnInit(): void {
    const chapterResolvedData: ChapterResolved = this.route.snapshot.data.resolvedData;
    this.errorMessage = chapterResolvedData.error;
    this.onChapterRetrieved(chapterResolvedData.chapter);

    console.log('course-chapter-content.component');
  }

  onChapterRetrieved(chapter: CourseChapter): void {
    this.courseService.getChapters().subscribe(
      chapters => {
        this.chapters = chapters;
      }
    );

    this.chapter = chapter;

    if (this.chapter) {
      this.pageTitle = `${this.chapter.chapterName}`;
    } else {
      this.pageTitle = 'No chapter found';
    }
  }


}
