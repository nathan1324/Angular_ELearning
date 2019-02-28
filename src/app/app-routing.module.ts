import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './user/login.component';


const ROUTES: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '',
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'user', component: UserComponent
      }
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  /* redefine path below */
  {
    path: '**', component: PageNotFoundComponent
  },
  /*
  {
    path: 'course', component: CourseComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
