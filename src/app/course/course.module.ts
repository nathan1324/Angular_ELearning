import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../course/course.component';
import { RouterModule } from '@angular/router';
import { CourseChapterComponent } from './course-chapter/course-chapter.component';

@NgModule({
  declarations:
  [
    CourseComponent,
    CourseChapterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'course', component: CourseComponent },
      { path: 'course/:id', component: CourseChapterComponent}
    ])
  ]
})
export class CourseModule { }
