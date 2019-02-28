import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  pageTitle = 'Course Catalog';

  courses: Course[] = [
    {
      id: 1,
      courseName: 'Course 1',
      courseCode: 'C101',
      description: 'This is an intro level course'
    },
    {
      id: 2,
      courseName: 'Course 2',
      courseCode: 'C201',
      description: 'This is an intermediate level course'
    },
    {
      id: 3,
      courseName: 'Course 3',
      courseCode: 'C301',
      description: 'This is an advanced level course'
    },
    {
      id: 4,
      courseName: 'Course 1',
      courseCode: 'C401',
      description: 'This is an expert level course'
    }
  ];
}
