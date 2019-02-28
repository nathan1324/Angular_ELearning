import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CourseResolved } from './course';
import { Observable, of } from 'rxjs';
import { CourseService } from './course.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CourseResolver implements Resolve<CourseResolved> {

  constructor(private courseService: CourseService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<CourseResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Course id was not a number: ${id}`;
      console.error(message);
      return of({course: null, error: message});
    }
    return this.courseService.getCourse(+id)
    .pipe(
      map(course => ({course: course})),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({course: null, error: message});
      })
    );
  }
 }
