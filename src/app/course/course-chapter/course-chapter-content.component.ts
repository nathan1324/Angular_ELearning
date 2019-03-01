import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course.component';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'epl-course-chapter-content',
  templateUrl: './course-chapter-content.component.html',
  styleUrls: ['./course-chapter-content.component.scss']
})
export class CourseChapterContentComponent extends CourseComponent implements OnInit {

  course: Course;

  constructor(public courseService: CourseService,
              public route: ActivatedRoute) {
      super(courseService, route);
}

  ngOnInit() {
  }

}
