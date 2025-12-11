import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;

  name = 'Yassine Meddeb';
  aboutTitle = 'About Me';
  role = 'Full Stack Developer & Tech Enthusiast';

  academicBackground = [
    'Baccalaureate in Computer Science - 2022',
    '3 Years License in Information Systems Development - ISET Nabeul',
    '2 Years Master in Network & Telecommunications - ENET’COM Sfax'
  ];

  description = [
    "I am a passionate Full Stack Developer focused on modern, elegant, and performant applications with smooth UX and clean architecture.",
    "I specialize in Angular, Spring Boot, Flutter, MySQL and deliver intuitive and professional solutions that meet real user needs."
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.aboutSection.nativeElement.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.aboutSection.nativeElement);
  }
}
