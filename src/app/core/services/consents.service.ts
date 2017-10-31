import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { consents } from '../mock/mock-data';
import { Consent } from '../../interfaces/consent.interface';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsentsService {
    private url: string = `/constants`;
    constructor(private _http: Http) {}

    public getConsents(dataRequest: any) {
        return this._http.get(this.url, {search: JSON.stringify(dataRequest)})
            .map((response: Response) => response.json());
    }

    public addConsent(consent) {
        const body = JSON.stringify(consent.value);
        return this._http.post(this.url, body)
            .map((response: Response) => response.json());
    }
}