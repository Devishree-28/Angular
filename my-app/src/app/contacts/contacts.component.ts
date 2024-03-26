import { Component} from '@angular/core';
import { PeopledataService } from '../peopledata.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  people:Person[]=[];
 
constructor(private contactservice:PeopledataService){}

ngOnInit():void{
  this.loadUsers();
}

populateArray(result:any){
  result.results.forEach((element:any) => {
    let person = new Person();
    
    person.firstname=element.name.first;
    person.lastname=element.name.last;
    person.email=element.email;

    this.people.push(person);
    
  });
}
loadUsers() {
  this.contactservice.getContacts().subscribe(
    {
      next:(result)=>{
        this.populateArray(result);
      }
    }
  );
}
}


