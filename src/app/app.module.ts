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
import { MainComponent } from './matches/main/main.component';
import { MatchesGridComponent } from './matches/matches-grid/matches-grid.component';



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
        MainComponent,
        MatchesGridComponent,
    ],
    providers: [
        DeterminationErrorService,
        HttpService,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [AppComponent]
})

export class AppModule {}