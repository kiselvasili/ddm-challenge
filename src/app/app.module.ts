import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { SharedModule } from './common/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { GiveConsentModule } from './give-consent/give-consent.module';
import { CollectedConsentsModule } from './collected-consents/collected-consents.module'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GiveConsentModule,
    CollectedConsentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
