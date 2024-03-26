import { Component } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name:string='';
 constructor(private dataservice:AppserviceService){

 }
 ngOnInit():void{
   
  this.name=this.dataservice.getName();

 }
}
