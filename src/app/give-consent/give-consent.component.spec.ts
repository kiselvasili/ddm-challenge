import { Router } from '@angular/router';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../common/shared.module';
import { ConsentsService } from '../core/services/consents.service';
import { ConsentMockService } from '../testing/ConsentMockService';
import { PagerService } from '../core/services/pager.service';
import { PagerMockService } from '../testing/PagerMockService';
import { GiveConsentComponent } from './give-consent.component';

import '../../config/vendor';

describe('Collected connsents component', () => {
    let fixture;
    let app;
    let routerService;
    let spyGetConsents;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            SharedModule,
            RouterTestingModule,
            BrowserAnimationsModule
        ],
        declarations: [
            GiveConsentComponent
        ],
        providers: [
            { provide: ConsentsService, useClass: ConsentMockService },
            { provide: PagerService, useClass: PagerMockService}
        ]
        
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GiveConsentComponent);
        app = fixture.debugElement.componentInstance;
        routerService = fixture.debugElement.injector.get(Router);
        spyGetConsents = spyOn(routerService, 'navigate');
    });
    

    it('should create the Give Consent Component', async(() => {
        expect(app).toBeTruthy();
    }));

    it('should navigate to consent list', fakeAsync(() => {
        app.onSubmit();
        tick();
        expect(spyGetConsents).toHaveBeenCalledWith(['/collected-consents']);
    }));

    it('should fill form', fakeAsync(() => {
        const fakeData = {
            name: 'max',
            email: 'max@mail.ru',
            options: {
                oneCheck: false,
                twoCheck: false,
                threeCheck: false
            }
        };
        fixture.detectChanges();
        app.consentForm.setValue(fakeData);
        app.onSubmit();
        tick();
        expect(app.consentForm.valid).toBe(false);
    }));
});