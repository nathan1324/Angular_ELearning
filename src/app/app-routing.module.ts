import { MyProfileComponent } from './user/my-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './user/login.component';
import { QuizComponent } from './quiz/quiz.component';

const ROUTES: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'login', component: LoginComponent
      }
      ,
      {
        path: 'myprofile', component: MyProfileComponent
      }
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
