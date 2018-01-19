import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HomepageBannerMainComponent } from './homepage-banner-main/homepage-banner-main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CateogryService } from './cateogry.service';
import { AppRoutingModule } from './/app-routing.module';
import { CategorylistcomponentComponent } from './categorylistcomponent/categorylistcomponent.component'


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomepageBannerMainComponent,
    HeaderComponent,
    FooterComponent,
    CategorylistcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CateogryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
