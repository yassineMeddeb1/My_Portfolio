import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  name: string = 'Yassine Meddeb';
  profession: string = 'Développeur Full Stack';
  description: string = 'Étudiant en informatique et passionné par le développement web et mobile. J’aime créer des applications avec une UX fluide et un design moderne.';
}
