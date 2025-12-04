import { Component, HostListener } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Navbar, RouterOutlet, About, Hero]
})
export class App {

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const el = document.getElementById('cursor');
    if (el) {
      el.style.left = e.pageX + 'px';
      el.style.top = e.pageY + 'px';
    }
  }
}
