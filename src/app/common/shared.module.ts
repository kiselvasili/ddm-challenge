import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveConsentModule } from '../give-consent/give-consent.module';
import { CollectedConsentsModule } from '../collected-consents/collected-consents.module';

const modules: Array<any> = [
    CommonModule,
    GiveConsentModule,
    CollectedConsentsModule
];

@NgModule({
    imports: [
        ...modules
    ],
    declarations: [],
    exports: [
        ...modules
    ]
})
export class SharedModule {}