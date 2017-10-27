import { NgModule } from '@angular/core';

import { SharedModule } from '../common/shared.module';

import { GiveConsentComponent } from './give-consent.component';

@NgModule({
  imports: [
      SharedModule,
  ],
  declarations: [
      GiveConsentComponent
  ],
  providers: [],
  exports: [
  ]
})
export class GiveConsentModule {}