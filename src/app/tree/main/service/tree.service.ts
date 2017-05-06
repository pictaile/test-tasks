import { Injectable } from '@angular/core';
import { Http,  Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {HttpService} from '../../../general/http_service/http.service';

import 'rxjs/Rx';

@Injectable()
export class TreeService extends HttpService {

  constructor(http:Http){

    super(http);
  }


  public getTree() {

    let params = new URLSearchParams();

    return this.fetch('/app/tree/main/service/json/tree.json', params);
  }


  public getLayout() {
    let params = new URLSearchParams();

    return this.fetch('/app/tree/main/service/json/layout.json', params);
  }

  public getMatches(id) {
    let params = new URLSearchParams();

    params.set('id',id);

    return this.fetch('/app/tree/main/service/json/matches.json', params);
  }
}
