import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UserComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'user', component: UserComponent
      },
      {
        path: 'login', component: UserComponent
      }
    ])
  ]
})
export class UserModule { }
