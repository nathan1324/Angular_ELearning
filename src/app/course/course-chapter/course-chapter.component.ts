import { Component, OnInit } from '@angular/core';
import { Course, CourseResolved } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CourseComponent } from '../course.component';
import { CourseService } from '../course.service';
import { CourseChapter } from './course-chapter';

@Component({
  templateUrl: './course-chapter.component.html',
  styleUrls: ['./course-chapter.component.scss']
})
export class CourseChapterComponent implements OnInit {
  pageTitle;
  course: Course;
  errorMessage: string;
  displayRegisterLink = true;
  displayCourseLink = false;



  constructor(public courseService: CourseService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    const courseResolvedData: CourseResolved = this.route.snapshot.data.resolvedData;
    this.errorMessage = courseResolvedData.error;
    this.onCourseRetrieved(courseResolvedData.course);

  }

  onCourseRetrieved(course: Course): void {
    this.course = course;

    if (this.course) {
      this.pageTitle = `Course Details - ${this.course.courseName}`;
    } else {
      this.pageTitle = 'No course found';
    }
  }

  loadCourse(): void {
    this.displayCourseLink = !this.displayCourseLink;
  }
}
