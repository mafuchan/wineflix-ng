import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { LinksComponent } from './links/links.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LinksComponent,
    AvatarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
