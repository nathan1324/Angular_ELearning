import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MyProfileComponent } from './my-profile.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule
    // RouterModule.forChild([
    //   {
    //     path: 'login', component: LoginComponent
    //   },
    //   {
    //     path: 'user', component: UserComponent
    //   }
    // ])
  ],
  declarations: [
    LoginComponent,
    MyProfileComponent
  ],
})
export class UserModule { }
