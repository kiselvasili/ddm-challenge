import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { consents } from '../mock/mock-data';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConsentsService {
    constructor() {}

    public getConsents() {
        return consents;
    }
}