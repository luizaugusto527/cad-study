import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    RegisterComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'',component:BannerComponent, pathMatch:'full'
    },{
      path:'register',component:RegisterComponent
    },
    {
      path:'students',component:StudentsComponent
    }
  
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
