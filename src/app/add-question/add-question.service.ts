import { Injectable } from '@angular/core';
import { Question } from './add-question';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Options } from '../options/options';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class QuestionService {

  url :string = "http://localhost:8080/quizzery--rest-api/rest/questions";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  constructor(private httpClient: HttpClient) { }
  
  save(postData) : Observable<any>{
      console.log("question"+postData)
    return this.httpClient.post<any>(this.url+"/addQuestion", postData,this.httpOptions);
  }

  public getQuestion(): Observable<Question[]> {
    
    return this.httpClient.get<Question[]>(this.url+"/questionList")
  }

  deleteQuestion(id : number):Observable<void>{
    return this.httpClient.delete<void>(this.url+"/delete/"+id)
  }
 

  formData : Question;
  options : Options[] = [];
  
  
}