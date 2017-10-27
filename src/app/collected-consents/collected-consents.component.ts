import { Component, OnInit } from '@angular/core';
import { ConsentsService } from '../core/services/consents.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ExampleDataSource } from '../common/DataSourse';

@Component({
    selector: 'collected-consents',
    templateUrl: './collected-consents.component.html',
    styleUrls: ['./collected-consents.component.scss']
})
export class CollectedConsentsComponent implements OnInit  {
    public dataSource;
    public displayedColumns = ['Name', 'Email', 'Consent'];

    constructor(private consentService: ConsentsService){
    }



    public ngOnInit() {
        let data = this.consentService.getConsents();
        this.dataSource = new ExampleDataSource(data);
        console.log(this.dataSource);
    }

    

}