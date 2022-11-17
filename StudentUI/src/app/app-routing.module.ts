import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetStudentByIdComponent } from './get-student-by-id/get-student-by-id.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:"login",component:StudentComponent
  },
  {
    path:"student/:id",component:GetStudentByIdComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
