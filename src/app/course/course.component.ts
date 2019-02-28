import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { filter } from 'rxjs/operators';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  pageTitle = 'Course Catalog';
  displayCourseLink = true;
  displayRegisterLink = true;
  displayQuizLink = true;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCourses = this.listFilter ? this.performFilter(this.listFilter) : this.courses;
  }

  filteredCourses: Course[] = [];
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  performFilter(filterBy: string): Course[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.courses.filter((course: Course) =>
      course.courseName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error => this.errorMessage =  error as any
    );
  }
}
