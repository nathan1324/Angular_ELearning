import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, filter } from 'rxjs/operators';

import { Course } from './course';
import { CourseChapter } from './course-chapter/course-chapter';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl = 'api/courses';
  private chapterUrl = 'api/chapters';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getCourse(id: number): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((courses: Course[]) => courses.find(c => c.id === id))
    );
  }

  getChapters(): Observable<CourseChapter[]> {
    return this.http.get<CourseChapter[]>(this.chapterUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  //getChapterByCourse(id: number): Observable<CourseChapter | undefined> {
  //  return this.getChapters().pipe(
  //   filter(chapter => chapter.)
  //  );
  //}

  getChapter(id: number): Observable<CourseChapter | undefined> {
    return this.getChapters().pipe(
      map((chapters: CourseChapter[]) => chapters.find(c => c.chapterId === id))
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
}
