import { Injectable } from '@angular/core';
import { Http,  Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {HttpService} from '../../../general/http_service/http.service';


import {Observable} from 'rxjs/Rx';


@Injectable()
export class TreeService extends HttpService {

  constructor(http:Http){

    super(http);
  }


  public getTree() {

  }

}
