import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { CommonModule } from '@angular/common';

///*components*/
import { MainComponent }  from './app/admin/main.component';
import { AuthComponent }  from './app/admin/auth/auth.component';
import { RecoveryComponent }  from './app/admin/auth/recovery.component';
//import { routing }  from './app/app.routing';




const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {path: 'auth', component: AuthComponent},
  {path: 'recovery', component: RecoveryComponent},
];


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,

    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    MainComponent,
    AuthComponent,
    RecoveryComponent
  ],
  providers: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }