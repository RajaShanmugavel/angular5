import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { TestBean } from './student';

@Injectable()
export class AppService {
    appUrl = "http://localhost:7003/anno/load";

    constructor(private http:Http){
    }

    getAllBeans(): Observable<TestBean[]> {
        return this.http.get(this.appUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res:Response){
        let body = res.json;
        return body;
    }

    private handleError(error:Response | any){
        console.error(error.message || error);
        return Observable.throw(error.status);
    }


}