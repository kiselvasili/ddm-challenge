import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GiveConsentComponent } from './give-consent/give-consent.component';
import { CollectedConsentsComponent } from './collected-consents/collected-consents.component';

const routes: Routes = [
    { path: '', redirectTo: '/give-consent', pathMatch: 'full' },
    { path: 'give-consent', component: GiveConsentComponent },
    { path: 'collected-consents', component: CollectedConsentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}