import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../course/course.component';
import { CourseChapterComponent } from '../course/course-chapter/course-chapter.component';
import { RouterModule } from '@angular/router';
import { CourseResolver } from './course-resolver.service';
import { SharedModule } from '../shared/shared.module';
import { CourseChapterContentComponent } from './course-chapter/course-chapter-content.component';
import { ChapterSectionComponent } from './course-chapter/chapter-section/chapter-section.component';
import { ChapterResolver } from './chapter-resolver.service';


@NgModule({
  declarations:
  [
    CourseComponent,
    CourseChapterComponent,
    CourseChapterContentComponent,
    ChapterSectionComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'course', component: CourseComponent },
      {
        path: 'course/:id',
        component: CourseChapterComponent,
        resolve: { resolvedData: CourseResolver }
      },
      {
        path: 'course/:id/chapter',
        component: CourseChapterContentComponent,
        resolve: { resolvedData: ChapterResolver }
      }
    ])
  ]
})
export class CourseModule { }
