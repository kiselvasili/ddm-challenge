import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

import { SharedModule } from '../common/shared.module';
import { ConsentsService } from '../core/services/consents.service';
import { ConsentMockService } from '../testing/ConsentMockService';
import { PagerService } from '../core/services/pager.service';
import { PagerMockService } from '../testing/PagerMockService';
import { CollectedConsentsComponent } from './collected-consents.component';
import { ExampleDataSource } from '../common/DataSourse';
import { consentsMockData } from '../testing/fixture';

describe('Collected connsents component', () => {

    let fixture;
    let app;
    let consentService;
    let spyGetConsents;
    const consents = consentsMockData;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            SharedModule
        ],
        declarations: [
            CollectedConsentsComponent
        ],
        providers: [
            { provide: ConsentsService, useClass: ConsentMockService },
            { provide: PagerService, useClass: PagerMockService}
        ]
        
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CollectedConsentsComponent);
        app = fixture.debugElement.componentInstance;
        consentService = fixture.debugElement.injector.get(ConsentsService) as any;
        
    });

    it('should create the Collected Consents Component', async(() => {
        expect(app).toBeTruthy();
    }));

    it('should get data', fakeAsync(() => {
        spyGetConsents = spyOn(consentService, 'getConsents').and.returnValue(Observable.of(consents));
        app.setPage(1);
        tick();
        expect(app.totalLength).toBe(consents.consentsLength);
        expect(app.dataSource).toEqual(new ExampleDataSource(consents.consents));
    }));
});
