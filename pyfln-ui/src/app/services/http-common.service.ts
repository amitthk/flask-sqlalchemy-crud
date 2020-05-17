import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs, BaseRequestOptions, ResponseType, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';

import { AuthenticationService } from './index';
import { User } from '../models/user';
import { AuthRequestOptions } from './auth-request-options';

@Injectable()
export class HttpCommonService {

    private apiUrl:string;

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
                     this.apiUrl='/api';
    }

    get(url: string, options?: RequestOptions): Observable<Response>{
        return this.http.get(url,options).catch((response: Response)=>{
            return Observable.of(response);
        })
    }

    post(url: string, body:any, options?: RequestOptions): Observable<Response>{
        let opt = this.getRequestOptionArgs(options);
        opt.method='POST'
        return this.http.post(url,body,options).catch((response: Response)=>{
            return Observable.of(response);
        })
    }


    post_blob(url: string, body:any, options?: RequestOptions): Observable<Response>{
        let opt = this.getRequestOptionArgs(options);
        opt.method='POST'
        opt.responseType = ResponseContentType.Blob;
        return this.http.post(url,body,options).catch((response: Response)=>{
            return Observable.of(response);
        })
    }

    put(url: string, body:any, options?: RequestOptions): Observable<Response>{
        let opt = this.getRequestOptionArgs(options);
        opt.method='PUT'
        opt.responseType = ResponseContentType.Blob;
        return this.http.put(url,body,options).catch((response: Response)=>{
            return Observable.of(response);
        })
    }

    delete(url: string, options?: RequestOptions): Observable<Response>{
        return this.http.delete(url,options).catch((response: Response)=>{
            return Observable.of(response);
        })
    }

    getRequestOptionArgs(options: RequestOptions) {
        if(options){
            return options;
        }else{
            return this.getOptions()
        }
    }
    getOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if(options==null){
            options = new AuthRequestOptions();
            //to return a AuthRequestOptions Here
        }
        if(options.headers==null){
            options.headers = new Headers({'Content-Type':'application/json'});
        }
        return options;
    }
}