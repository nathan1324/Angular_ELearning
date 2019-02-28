import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseModule } from './course/course.module';
import { MessageModule } from './messages/message.module';
import { HttpClientModule } from '@angular/common/http';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    AppRoutingModule,
    UserModule,
    MessageModule,
    HttpClientModule
    // ,
    // InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
