import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [UserComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
