import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ConsentMockService {
    public consents = [
        { name: 'vasili', email: 'vasili@mail.ru', options: { oneCheck: true, twoCheck: false, threeCheck: true } },
        { name: 'ura', email: 'ura@mail.ru', options: { oneCheck: true, twoCheck: true, threeCheck: true } },
        { name: 'kostya', email: 'kostya@mail.ru', options: { oneCheck: false, twoCheck: false, threeCheck: true } }
    ];
    constructor() {}

    public getConsents() {
        return Observable.of(this.consents);
    }

    public addConsent(consent) {
        return Observable.of(null);
    }

}