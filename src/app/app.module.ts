import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { LinksComponent } from './links/links.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { DrinkButtonComponent } from './drink-button/drink-button.component';
import { InfoButtonComponent } from './info-button/info-button.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LinksComponent,
    AvatarComponent,
    NavbarComponent,
    HeroContentComponent,
    DrinkButtonComponent,
    InfoButtonComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
