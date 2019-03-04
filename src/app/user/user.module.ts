import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MyProfileComponent } from './my-profile.component';
import { UserCourseComponent } from './user-course/user-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';



@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: '',
        component: UserModule
    },
      { path: 'user-course', component: UserCourseComponent }
      // ,{
      //   path: 'products/:id',
      //   component: ProductDetailComponent,
      //    resolve: { resolvedData: ProductResolver}
      // },
      // { path: 'products/:id/edit', component: ProductEditComponent }
    ])
  ],
  declarations: [
    LoginComponent,
    MyProfileComponent,
    UserCourseComponent
  ],
})
export class UserModule { }
