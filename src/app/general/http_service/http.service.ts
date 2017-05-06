import { Injectable } from '@angular/core';
import { Http,  Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class HttpService  {

    constructor(protected http: Http) {}

    /**
     * method http get
     * @param url
     * @param params
     * @returns {Http}
     */
    fetch(url, params) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions(
            {
                headers: headers,
                search: params,
            });

        return this.http
            .get(
                url,
                options
            )
            .map(res => res.json())
            .map((res) => {
                return res;
            });
    }



    /**
     * method http post
     * @param url
     * @param data
     * @returns {Http}
     */
    send(url, data) {

        let body = JSON.stringify(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .map(res => res.json())
            .map((res) => {
                return res;
            });
    }

    /**
     * method http put
     * @param url
     * @param data
     * @returns {Http}
     */
    stick(url, data) {
        let body = JSON.stringify(data);

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this.http
            .put(url, body, {headers:headers})
            .map(res => res.json())
            .map((res) => {
                return res;
            });
    }

    /**
     * method http delete
     * @param url
     * @param params
     * @returns {Http}
     */
    remove(url, params) {
        var data = Object.keys(params).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
        }).join('&');
        url += '?' + data;

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this.http.delete(url, {headers:headers})
            .map(res => res.json())
            .map((res) => {
                return res;
            });
    }

}