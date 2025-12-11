import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements OnInit {

  currentIndex = 0;
  autoPlayInterval: any;

  services = [
    { title: 'Frontend Development', icon: 'fas fa-laptop-code', desc: 'Modern interfaces, smooth animations, and high-level UX (Angular).' },
    { title: 'Backend Development', icon: 'fas fa-server', desc: 'Robust, secure, and performant APIs (Spring Boot, PHP).' },
    { title: 'Mobile Development', icon: 'fas fa-mobile-alt', desc: 'Optimized and reliable Android & Flutter apps.' },
    { title: 'DevOps & Deployment', icon: 'fas fa-cloud-upload-alt', desc: 'CI/CD, Docker, pipelines, cloud deployment.' },
    { title: 'Network Administration', icon: 'fas fa-network-wired', desc: 'Linux, security, routing, advanced configuration.' },
    { title: 'Freelance & Consulting', icon: 'fas fa-lightbulb', desc: 'Custom solutions, analysis, and problem-solving.' },
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 3500);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.services.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.services.length) % this.services.length;
  }
}
