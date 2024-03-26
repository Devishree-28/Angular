import { Component } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
name:string='';

constructor(private dataservice: AppserviceService){}
address:string[]=['elmwood st','concord']
ngOnInit() :void{
 this.name="Buvi";
 this.dataservice.setName(this.name);
}
}
