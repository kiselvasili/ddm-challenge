import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ConsentsService } from '../core/services/consents.service';

import { Consent } from '../interfaces/consent.interface';

export class ExampleDataSource extends DataSource<any> {
    constructor(private data: Array<Consent>){
        super();
    }
    
    public connect(): Observable<any>{
        return Observable.of(this.data);
    }

    public disconnect(){}
}