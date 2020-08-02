import { Injectable } from '@angular/core';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ProcessHttpmssgService } from './process-httpmssg.service';
import { map, catchError } from 'rxjs/operators';
import {countries} from '../shared/countries';


@Injectable({
  providedIn: 'root'
})
export class WorldalltimeService {
  fetch: any;
  constructor(private http:Http,private processHTTPMsgService: ProcessHttpmssgService) { }

  public getalltimedata():Observable<any>{
   return this.http.get('https://covid19.mathdro.id/api');
    
  }
  public getdailydata():Observable<any>{
    return this.http.get('https://covid19.mathdro.id/api/daily');
  }
  public getcountrylist():Observable<any>{
    return this.http.get('https://covid19.mathdro.id/api/countries/');
  }
  public getcountryspecifieddata(){
    var Data=[];
    countries.forEach(country => {
      this.http.get('https://covid19.mathdro.id/api/countries/'+country).subscribe(res =>{
      var resj=res.json();
      resj['country']=country;
      Data.push(resj);
    });
      
    });
    return Data;
  }

}
