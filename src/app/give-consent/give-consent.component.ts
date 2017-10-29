import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConsentsService } from '../core/services/consents.service';
import * as _ from 'lodash';

@Component({
    selector: 'give-consent',
    templateUrl: './give-consent.component.html',
    styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {
    public consentForm: FormGroup;

    constructor (private _fb: FormBuilder,
                 private consentService: ConsentsService,
                 private router: Router){}

    public ngOnInit(): void {
        this.consentForm = this._fb.group({
            'name': ['', Validators.required],
            'email': ['', Validators.required],
            'options': this._fb.group({
                'oneCheck': false,
                'twoCheck': false,
                'threeCheck': false
            }, {validator: false})
        });
    }

    public onSubmit(consentsForm: FormGroup): void {
        this.consentService.addConsent(this.consentForm)
            .subscribe(() => {
                this.router.navigate(['/collected-consents']);
            });
    }

    public validForm(): void {

    }

}