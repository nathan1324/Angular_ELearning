import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../course/course.component';
import { CourseChapterComponent } from '../course/course-chapter/course-chapter.component';
import { RouterModule } from '@angular/router';
import { CourseResolver } from './course-resolver.service';

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
      {
        path: 'course/:id',
        component: CourseChapterComponent,
        resolve: { resolvedData: CourseResolver }
      }
    ])
  ]
})
export class CourseModule { }
