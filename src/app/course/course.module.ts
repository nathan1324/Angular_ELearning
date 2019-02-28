import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../course/course.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:
  [
    CourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'course', component: CourseComponent }
    ])
  ]
})
export class CourseModule { }
