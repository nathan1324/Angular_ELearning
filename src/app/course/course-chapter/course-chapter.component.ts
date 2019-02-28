import { Component } from '@angular/core';
import { Course } from '../course';

@Component({
  templateUrl: './course-chapter.component.html',
  styleUrls: ['./course-chapter.component.scss']
})
export class CourseChapterComponent {
  pageTitle = 'Course Chapter';
  course: Course;

}
