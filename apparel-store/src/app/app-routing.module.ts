import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorylistcomponentComponent } from './categorylistcomponent/categorylistcomponent.component';
import { HomepageBannerMainComponent } from './homepage-banner-main/homepage-banner-main.component';

const appRoutes: Routes = [
    {path:'c/:id', component: CategorylistcomponentComponent},{path:'',component:HomepageBannerMainComponent  }
]
@NgModule({
     imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
