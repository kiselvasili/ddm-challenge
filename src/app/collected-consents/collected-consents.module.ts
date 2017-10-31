import { NgModule } from '@angular/core';

import { SharedModule } from '../common/shared.module';
import { CollectedConsentsComponent } from './collected-consents.component';

@NgModule({
  imports: [
      SharedModule
  ],
  declarations: [
      CollectedConsentsComponent
  ],
  providers: []
})
export class CollectedConsentsModule {}