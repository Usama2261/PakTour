import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./main/dashboard/dashboard.component";
import { ExploreComponent } from "./main/explore/explore.component";
import { MyPlacesComponent } from "./main/my-places/my-places.component";
import { PlaceDetailsComponent } from "./main/place-details/place-details.component";
import { PlacesByCategoryComponent } from "./main/places-by-category/places-by-category.component";
import { LoginComponent } from "./shared/login/login.component";
import { MainLayoutComponent } from "./shared/main-layout/main-layout.component";
import { RegisterComponent } from "./shared/register/register.component";


const routes: Routes = [
    { path: '', redirectTo: 'myPlaces', pathMatch: 'full'},
    { path: 'home', component: MainLayoutComponent},
    // { path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: RegisterComponent},
    { path: 'myPlaces', component: MyPlacesComponent},
    { path: 'explore', children: [
        { path: '', component: ExploreComponent},
        { path: 'detail/:id', component: PlaceDetailsComponent},
        { path: 'category/:name', component: PlacesByCategoryComponent},
    ]},
    
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
      ],
    exports:[RouterModule]
})

export class AppRoutingModule {}