import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
name:string='';

  constructor() { }

  setName(newName:string){
    this.name=newName;
  }
  getName(){
    return this.name;
  }
}
