import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'user', component: UserComponent
      }
    ])
  ],
  declarations: [
    UserComponent,
    LoginComponent
  ],
})
export class UserModule { }
