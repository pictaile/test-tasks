import {  Component,  Directive, ElementRef, HostListener, Input,Output, EventEmitter, Renderer, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeterminationErrorService } from './determination_errors.service';

@Component({
    moduleId: module.id,
    selector: 'notice',
    templateUrl: './determination_errors.view.html',
})

export class DeterminationErrors {


    private determinationError;
    private error;

    private successHandler  = function () {

    };

    constructor( private router: Router) {
        this.determinationError = new DeterminationErrorService();
    }

    private notice = {
        state: '',
        message: ''
    };

    @Input() set setError (error: any) {
        if(error) {
            this.error = error;
            this.notice.state = 'error';
            this.notice.message = this.determinationError.getErrorMessage(this.error);
        } else {
            this.notice.state = '';
            this.notice.message = '';
        }
    }


    @Input() set setNotice (notice: any) {

        if(notice) {
            this.notice.state = 'notice';
            this.notice.message = notice.message;
        } else {
            this.notice.state = '';
            this.notice.message = '';
        }
    }


    @Input('successCallback') set successCallback(callback) {
        this.error = null;
        this.successHandler = callback;
    }

    success() {
        this.notice.state = '';
        this.error = {};
        if(this.notice.message == 'Invalid access token') {
            this.router.navigate(['auth']);
        } else {
            this.successHandler();
        }
    }
}