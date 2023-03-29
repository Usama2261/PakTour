import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MyPlacesComponent } from './main/my-places/my-places.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MyPlacesComponent,
    HeaderComponent,
    MainLayoutComponent
   ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PanelModule,
    DialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
