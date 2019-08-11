import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  apiUrl : string = "../assets/json/";
  login=new Subject();

  constructor( private http : HttpClient) { }

  getCategory(id){
    return this.http.get(this.apiUrl + 'article' + id + '.json');
  }

  getCategories(){
    return this.http.get(this.apiUrl + "categories.json");
  }

  getAuthors(){
    return this.http.get(this.apiUrl + "authors.json");
  }

  getUser(){
    return this.http.get(this.apiUrl + "user.json")
  }

}
