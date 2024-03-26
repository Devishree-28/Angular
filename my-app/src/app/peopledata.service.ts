import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopledataService {

  constructor(private http:HttpClient) { }

  getContacts(){
   return this.http.get('https://randomuser.me/api/?results=10');
}
}



