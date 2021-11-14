import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path:'',component:BannerComponent, pathMatch:'full'
    },{
      path:'register',component:RegisterComponent
    }
  
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
