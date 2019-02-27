import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../course/course.component';
import { CourseChapterComponent } from './course-chapter/course-chapter.component';
import { ChapterSectionComponent } from './Course-Chapter/chapter-section/chapter-section.component';

@NgModule({
  declarations: 
  [
    CourseComponent, 
    CourseChapterComponent, 
    ChapterSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
