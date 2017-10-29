import { Injectable } from '@angular/core';
import { Http, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { consents } from '../core/mock/mock-data';
import { Consent } from '../interfaces/consent.interface';

import * as _ from 'lodash';

@Injectable()
export class ExtendedHttpService extends Http {
    private consents: Array<Consent>;
    private consentsLength: number;
    private limit: number;

    constructor () {
        super(null, null);
        this.consents = [...consents];
        this.consentsLength = consents.length; 
        this.limit = 3;
        console.log('consents', this.consents)
    }

    public get<T>(url: string, options?: any): Observable<T> {
        const page = JSON.parse(options.search).page - 1;
        const shift = page * this.limit;
        const consents = _.slice(this.consents, shift, shift + this.limit)
        const jsonData = JSON.stringify({
            consentsLength: this.consentsLength,
            consents
        });
        return Observable.of(<any>new CustomResponse(jsonData));
    }

    public post<T>(url: string, body, options?: any): Observable<T> {
        const consent = JSON.parse(body);

        if (!(consent && typeof consent === 'object')) {
            return Observable.throw('Error');
        }

        if (Array.isArray(consent)) {
            this.consents = [...this.consents, ...(<Array<Consent>>consent)];
        } else {
            this.consents = [...this.consents, <Consent>consent];
        }

        return Observable.of(<any>new CustomResponse(JSON.stringify({})));
    }
}

class CustomResponse extends Response {
    constructor(private data)  {
        super({body: '', status: 200, headers: null, url: '', merge: null});
    }

    json() {
        return JSON.parse(this.data);
    }
}
