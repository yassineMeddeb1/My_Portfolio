import { Component, HostListener } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Services,
    Contact
  ]
})
export class App {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const el = document.getElementById('cursor');
    if (el) {
      el.style.left = e.pageX + 'px';
      el.style.top = e.pageY + 'px';
    }
  }
}
