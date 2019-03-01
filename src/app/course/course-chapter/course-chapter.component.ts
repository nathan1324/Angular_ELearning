import { Component, OnInit } from '@angular/core';
import { Course, CourseResolved } from '../course';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-chapter.component.html',
  styleUrls: ['./course-chapter.component.scss']
})
export class CourseChapterComponent implements OnInit {
  pageTitle;
  course: Course;
  errorMessage: string;
  //chapters: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: CourseResolved = this.route.snapshot.data.resolvedData;
    this.errorMessage = resolvedData.error;
    this.onCourseRetrieved(resolvedData.course);

  }

  onCourseRetrieved(course: Course): void {
    this.course = course;

    if (this.course) {
      this.pageTitle = `${this.course.courseName}`;
    } else {
      this.pageTitle = 'No course found';
    }
  }
}
