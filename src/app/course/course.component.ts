import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


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

// tslint:disable-next-line: variable-name
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

  constructor(public courseService: CourseService,
              public route: ActivatedRoute) { }

  performFilter(filterBy: string): Course[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.courses.filter((course: Course) =>
      course.courseName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';


    this.courseService.getCourses().subscribe(
      courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error => this.errorMessage =  error as any
    );
  }
}
