import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseModule } from './course/course.module';
import { MessageModule } from './messages/message.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CourseData } from './course/course-data';
import { UserData } from './user/user-data';
import { UserCourseData } from './user/user-course/user-course-data';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CourseModule,
    AppRoutingModule,
    UserModule,
    MessageModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(CourseData, UserData, UserCourseData, { delay: 1000 }),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
