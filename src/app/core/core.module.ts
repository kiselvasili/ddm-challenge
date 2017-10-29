import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { ConsentsService } from './services/consents.service';
import { PagerService } from './services/pager.service';
import { ExtendedHttpService } from '../http/mock-http';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [],
    providers: [
        ConsentsService,
        PagerService,
        ExtendedHttpService,
        { provide: Http, useClass: ExtendedHttpService }
    ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

}