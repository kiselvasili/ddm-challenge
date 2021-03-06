import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ExampleDataSource } from '../common/DataSourse';

import { ConsentsService } from '../core/services/consents.service';
import { PagerService } from '../core/services/pager.service';
import { consentsOption } from '../app.constants';
import { limitPagination } from '../app.constants';

import * as _ from 'lodash';

@Component({
    selector: 'collected-consents',
    templateUrl: './collected-consents.component.html',
    styleUrls: ['./collected-consents.component.scss']
})
export class CollectedConsentsComponent implements OnInit  {
    public dataSource: ExampleDataSource;
    public displayedColumns = ['Name', 'Email', 'Consent'];
    public pager: any = {};
    public totalLength: number;
    public consentsOption: any = consentsOption;
    public limit: number = limitPagination;

    constructor(private consentService: ConsentsService,
                private pagerService: PagerService){
    }

    public ngOnInit() {
        this.setPage(1);
    }

    public setPage(page: number): void {
        let dataRequest = {
            page,
            limit: this.limit
        };
        this.consentService.getConsents(dataRequest)
            .subscribe(data => {
                if(!data) {
                    return;
                }
                this.totalLength = data.consentsLength;
                this.dataSource = new ExampleDataSource(data.consents);
            });
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.pager = this.pagerService.getPager(this.totalLength, page, this.limit);
    }

    public fitlerOption(options): Array<string> {
        let data = [];
        _.forEach(this.consentsOption, (value, key) => {
            if (options[key]) {
                data.push(value);
            }
        });
        return data;
    }

}