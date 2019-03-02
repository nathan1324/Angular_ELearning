import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../../course.component';
import { CourseService } from '../../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'epl-chapter-section',
  templateUrl: './chapter-section.component.html',
  styleUrls: ['./chapter-section.component.scss']
})
export class ChapterSectionComponent extends CourseComponent implements OnInit {

  constructor(public courseService: CourseService,
              public route: ActivatedRoute) {
          super(courseService, route);
  }

  ngOnInit() {
  }

}
