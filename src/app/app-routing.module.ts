import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'',component:BannerComponent, pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'students',component:StudentsComponent}
]
  
@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
