import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CourseResolved } from './course';
import { Observable, of } from 'rxjs';
import { CourseService } from './course.service';
import { catchError, map } from 'rxjs/operators';
import { ChapterResolved } from './course-chapter/course-chapter';

@Injectable({
  providedIn: 'root'
})

export class ChapterResolver implements Resolve<ChapterResolved> {

  constructor(private courseService: CourseService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ChapterResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Chapter id was not a number: ${id}`;
      console.error(message);
      return of({chapter: null, error: message});
    }
    return this.courseService.getChapter(+id)
    .pipe(
      map(chapter => ({chapter})),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({chapter: null, error: message});
      })
    );
    }
  }
