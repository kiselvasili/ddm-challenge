import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ExampleDataSource } from '../common/DataSourse';

import { ConsentsService } from '../core/services/consents.service';
import { PagerService } from '../core/services/pager.service';
import { consentsOption } from '../app.constants';

import * as _ from 'lodash';

@Component({
    selector: 'collected-consents',
    templateUrl: './collected-consents.component.html',
    styleUrls: ['./collected-consents.component.scss']
})
export class CollectedConsentsComponent implements OnInit  {
    public dataSource;
    public displayedColumns = ['Name', 'Email', 'Consent'];
    public pager: any = {};
    public pageItems: any[];
    public totalLength: number;
    public consentsOption: any = consentsOption;

    constructor(private consentService: ConsentsService,
                private pagerService: PagerService){
    }

    

    public ngOnInit() {
        this.setPage(1);
        console.log(this.consentsOption);
    }

    public setPage(page: number) {
        this.consentService.getConsents(page)
            .subscribe(data => {
                this.totalLength = data.consentsLength;
                this.dataSource = new ExampleDataSource(data.consents);
                
            });
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.pager = this.pagerService.getPager(this.totalLength, page);
    }

    public fitlerOption(options) {
    
        return [1,2,3];
    }

}