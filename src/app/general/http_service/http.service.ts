import { Injectable } from '@angular/core';
import { Http,  Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { User } from '../user/user.model';
import { IUserModel } from '../user/user_model_interface';

@Injectable()

export class HttpService  {
    protected userInfo:IUserModel;

    constructor(public http: Http, public user: User) {
        this.userInfo = this.user.getInfo();

    }

    /**
     * method http get
     * @param url
     * @param params
     * @returns {Http}
     */
    fetch(url, params, addData) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');


        headers.append('User-Id',  this.userInfo.id);
        headers.append('Token',  this.userInfo.accessToken);

        if(addData.accessType) {
            headers.append('Access-Type', '1');
        }

        if(addData.limit) {

         headers.append('Offset-Step',  addData.limit);
        }

        if(addData.page || addData.page === 0) {
            let count = (parseInt(addData.page )- 1) * parseInt(addData.limit);
            headers.append('Count',  count.toString());
        }


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

        headers.append('User-Id',  this.userInfo.id);
        headers.append('Token',  this.userInfo.accessToken);

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

        headers.append('User-Id',  this.userInfo.id);
        headers.append('Token',  this.userInfo.accessToken);

        return this.http.delete(url, {headers:headers})
            .map(res => res.json())
            .map((res) => {
                return res;
            });
    }

}