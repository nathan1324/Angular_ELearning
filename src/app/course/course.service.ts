import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl = 'api/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCourse(id: number): Observable<Course> {
    if (id === 0) {
      return of(this.initializeCourse());
    }
    const url = `${this.courseUrl}/${id}`;
    return this.http.get<Course>(url)
      .pipe(
        tap(data => console.log('getCourse: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeCourse(): Course {
    // Return an initialized object
    return {
      id: 0,
      courseName: null,
      courseCode: null,
      description: null,
      totalChapters: 0,
      totalChapterSections: 0
    };
  }

}
