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
    }

    public get<T>(url: string, options?: any): Observable<T> {
        if (!options) {
            return;
        }
        let data = JSON.parse(options.search);
        const page = data.page - 1;
        const limit = data.limit;
        const shift = page * limit;
        const consents = _.slice(this.consents, shift, shift + limit)
        const jsonData = {
            consentsLength: this.consentsLength,
            consents
        };
        return Observable.of(<any>new CustomResponse(jsonData));
    }

    public post<T>(url: string, body): Observable<T> {
        const consent = JSON.parse(body);

        if (!(consent && typeof consent === 'object')) {
            return Observable.throw('Error');
        }
        this.consents = [...this.consents, <Consent>consent];
        this.consentsLength = this.consents.length;

        return Observable.of(<any>new CustomResponse({}));
    }
}

class CustomResponse extends Response {
    constructor(private data)  {
        super({body: '', status: 200, headers: null, url: '', merge: null});
    }

    json() {
        return this.data;
    }
}
