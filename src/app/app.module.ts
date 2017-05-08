import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {routing} from "./routing"

import {HttpService} from './general/http_service/http.service';

/*determination error*/
import { DeterminationErrors} from './general/determination_errors/determonation_errors.direcite';
import { HttpPopupErrors} from './general/determination_errors/http_popup_errors.directive';
import { DeterminationErrorService } from './general/determination_errors/determination_errors.service';

import { AppComponent } from './app.component';
import { MainComponent } from './tree/main/main.component';


import { TreeItemComponent } from './tree/main/tree-item/tree-item.component';
import { SortPriorityPipe } from './tree/main/pipe/sort-priority.pipe';
import { SortCountryPipe } from './tree/main/pipe/sort-country.pipe';
import { SortLeaguePipe } from './tree/main/pipe/sort-league.pipe';
import { EmptyPipe } from './tree/main/pipe/empty.pipe';




/*search*/

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        FormsModule,
      ],
    declarations: [
        AppComponent,
        MainComponent,
        HttpPopupErrors,
        DeterminationErrors,
        TreeItemComponent,
        SortPriorityPipe,
        SortCountryPipe,
        SortLeaguePipe,
        EmptyPipe,

    ],
    providers: [
        DeterminationErrorService,
        HttpService,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [AppComponent]
})

export class AppModule {}