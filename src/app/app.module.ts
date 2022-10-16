import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PromotionOfferComponent } from './shared/components/promotion-offer/promotion-offer.component';
import { ProfileComponent } from './features/profile/profile.component';
import { UserExperienceComponent } from './features/profile/components/user-experience/user-experience.component';
import { UserInfoComponent } from './features/profile/components/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PromotionOfferComponent,
    ProfileComponent,
    UserExperienceComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
