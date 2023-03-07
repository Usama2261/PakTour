import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./main/dashboard/dashboard.component";
import { MyPlacesComponent } from "./main/my-places/my-places.component";
import { LoginComponent } from "./shared/login/login.component";
import { RegisterComponent } from "./shared/register/register.component";


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: RegisterComponent},
    { path: 'myPlaces', component: MyPlacesComponent}
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
      ],
    exports:[RouterModule]
})

export class AppRoutingModule {}