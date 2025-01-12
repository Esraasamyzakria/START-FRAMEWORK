import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  s1:string="LOCATION";
  s2:string="2215 John Daniel Drive";
  s3:string="Clark, MO 65243";
  s4:string="ABOUT FREELANCER";
  s5:string="Freelance is a free to use, licensed Bootstrap theme created by Route";
  s6:string="Copyright © Your Website 2021";
  s7:string="AROUND THE WEB";
  classicon:string[]=[
    "fa-brands fa-facebook fonts",
    "fa-brands fa-twitter fonts",
    "fa-brands fa-linkedin fonts",
    "fa-solid fa-globe fonts"
  ]

}
