import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
   name = 'Yassine Meddeb';
profession = 'Full Stack Developer';
description = 
  'Computer science student with a passion for web and mobile development. I enjoy building modern applications with smooth, intuitive, and elegant user experiences.';

}
