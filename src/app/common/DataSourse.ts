import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ConsentsService } from '../core/services/consents.service';

import { Consent } from '../interfaces/consent.interface';

export class ExampleDataSource extends DataSource<Consent> {
    constructor(private data: Array<Consent>){
        super();
    }
    
    public connect(): Observable<Array<Consent>>{
        return Observable.of(this.data);
    }

    public disconnect(){}
}