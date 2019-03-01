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
<<<<<<< HEAD
import { QuizModule } from './quiz/quiz.module';
=======
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CourseData } from './course/course-data';
import { FormsModule } from '@angular/forms';
>>>>>>> a095e8bca4fc56a260ff33941a341ea4b982ba3a

@NgModule({
  imports: [
    BrowserModule,
    CourseModule,
    UserModule,
    MessageModule,
    HttpClientModule,
<<<<<<< HEAD
    QuizModule,
    AppRoutingModule,
    // ,
    // InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
=======
    HttpClientInMemoryWebApiModule.forRoot(CourseData, { delay: 1000 }),
>>>>>>> a095e8bca4fc56a260ff33941a341ea4b982ba3a
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
