import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { consents } from '../mock/mock-data';
import { Consent } from '../../interfaces/consent.interface';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsentsService {
    constructor(private _http: Http) {}

    public getConsents(page: number) {
        return this._http.get(`/constants`, {search: JSON.stringify({page})})
            .map((response: Response) => response.json());
    }

    public addConsent(consent) {
        const body = JSON.stringify(consent.value);
        return this._http.post(`/constants`, body)
            .map((response: Response) => response.json());
    }
}