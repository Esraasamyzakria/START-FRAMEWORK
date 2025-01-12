import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
head:string="CONATCT SECTION"
name:string="UserName:"
userAge:string="userAge:"
userEmail:string="userEmail:"
userPassword:string="userPassword :"
}
