import { Injectable } from '@angular/core';
import { Options } from './options';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class OptionsService {

  url :string = "http://localhost:8080/quizzery--rest-api/rest/questions";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  constructor(private httpClient: HttpClient) { }
  
  save(options) {
    
    return this.httpClient.post<any>(this.url+"/mcq", options,this.httpOptions);
  }

  getChoices(criterion : number): Observable<Options[]>{
    var questionList : Options[];
    return this.httpClient.get(this.url+ "/getChoices?questionRef=" + criterion) as Observable<Options[]>;
    
 
  }

}