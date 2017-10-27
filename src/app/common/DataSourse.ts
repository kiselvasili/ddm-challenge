import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ConsentsService } from '../core/services/consents.service';
import 'rxjs/add/observable/of';

export class ExampleDataSource extends DataSource<any> {
    constructor(private data: any){
        super();
    }
    
    public connect(): Observable<any>{
        return Observable.of(this.data);
    }

    public disconnect(){}
}