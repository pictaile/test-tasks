import {  Component,  Directive, ElementRef, HostListener, Input,Output, EventEmitter, Renderer, ViewChild, AfterViewInit } from '@angular/core';
import { DeterminationErrorService } from './determination_errors.service';
//import * as $ from 'jquery';

@Component({
    selector: 'http_result',
    template: `<div class="http-result-wrapper">
                    <p class="success-notice" *ngIf="notice.state == 'notice'">{{ notice.message }}</p>
                    <p class="error-notice" *ngIf="notice.state == 'error'">{{ notice.message }}</p>
            </div>`,
})

export class HttpPopupErrors {

    private determinationError;

    constructor() {
        this.determinationError = new DeterminationErrorService();
    }

    private notice = {
            state: '',
            message: ''
        };

    @Input() set setSuccess (message: string) {
        if(message) {
            this.notice.state = 'notice';
            this.notice.message = message;
        } else {
            this.notice.state = '';
            this.notice.message = '';
        }
    }

    @Input() set setError (error: any) {
        if(error) {
            this.notice.state = 'error';
            this.notice.message = this.determinationError.getErrorMessage(error);
        } else {
            this.notice.state = '';
            this.notice.message = '';
        }
    }

}