import {
  Component,
  HostListener,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModal } from './modal/modal';

export interface Project {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  images: string[];
  category: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModal],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects implements AfterViewInit {

  categories = ['Tous', 'Web', 'Mobile', 'Backend', 'FullStack'];
  activeCategory = 'Tous';
  selectedProject: Project | null = null;
  isModalOpen = false;

 projects: Project[] = [
    {
      id: 1,
      name: 'Portfolio Angular',
      shortDesc: 'Portfolio moderne et interactif',
      fullDesc: 'Portfolio Angular avec design moderne et animations fluides.',
      tech: ['Angular', 'TypeScript', 'CSS'],
      images: [
        'assets/projects/Immobilier/immo1.png',
        'assets/projects/Immobilier/immo2.png',
      ],
      category: 'Web',
      githubLink: 'https://github.com/username/portfolio',
    },
    {
      id: 2,
      name: 'Application Mobile Flutter',
      shortDesc: 'Application mobile cross-platform',
      fullDesc: 'App Flutter fluide sur Android et iOS.',
      tech: ['Flutter', 'Dart'],
      images: [
        'assets/projects/Immobilier/immo7.png',
        'assets/projects/Immobilier/immo8.png',
      ],      category: 'Mobile',
      githubLink: 'https://github.com/username/flutter-app',
    },
    {
      id: 3,
      name: 'API Spring Boot',
      shortDesc: 'API REST sécurisée',
      fullDesc: 'API Spring Boot avec JWT et gestion des rôles.',
      tech: ['Spring Boot', 'Java', 'JWT'],
      images: [
        'assets/projects/Immobilier/immo3.png',
        'assets/projects/Immobilier/immo4.png',
      ],
      category: 'Backend',
      githubLink: 'https://github.com/username/spring-api',
    },
    {
      id: 4,
      name: 'Plateforme FullStack',
      shortDesc: 'Application Web FullStack',
      fullDesc: 'Angular + Spring Boot pour gérer projets et utilisateurs.',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      images: [
        'assets/projects/Immobilier/immo5.png',
        'assets/projects/Immobilier/immo2.png',
      ],
      category: 'FullStack',
      githubLink: 'https://github.com/username/fullstack-app',
    },
     {
      id: 5,
      name: 'Plateforme FullStack',
      shortDesc: 'Application Web FullStack',
      fullDesc: 'Angular + Spring Boot pour gérer projets et utilisateurs.',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      images: [
        'assets/projects/Immobilier/immo6.png',
        'assets/projects/Immobilier/immo2.png',
      ],
      category: 'FullStack',
      githubLink: 'https://github.com/username/fullstack-app',
    },
     {
      id: 6,
      name: 'Plateforme FullStack',
      shortDesc: 'Application Web FullStack',
      fullDesc: 'Angular + Spring Boot pour gérer projets et utilisateurs.',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      images: [
        'assets/projects/Immobilier/immo1.png',
        'assets/projects/Immobilier/immo2.png',
      ],
      category: 'FullStack',
      githubLink: 'https://github.com/username/fullstack-app',
    },
     {
      id: 7,
      name: 'Plateforme FullStack',
      shortDesc: 'Application Web FullStack',
      fullDesc: 'Angular + Spring Boot pour gérer projets et utilisateurs.',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      images: [
        'assets/projects/Immobilier/immo2.png',
        'assets/projects/Immobilier/immo2.png',
      ],
      category: 'FullStack',
      githubLink: 'https://github.com/username/fullstack-app',
    },
     {
      id: 8,
      name: 'Plateforme FullStack',
      shortDesc: 'Application Web FullStack',
      fullDesc: 'Angular + Spring Boot pour gérer projets et utilisateurs.',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      images: [
        'assets/projects/Immobilier/immo4.png',
        'assets/projects/Immobilier/immo2.png',
      ],
      category: 'FullStack',
      githubLink: 'https://github.com/username/fullstack-app',
    },
  ];

  filteredProjects = [...this.projects];

  currentIndex = 0;
  cardWidth = 340;
  carouselWidth = window.innerWidth;
  transform = 'translateX(0px)';

  ngAfterViewInit() {
    this.updateCarousel();
  }

  @HostListener('window:resize')
  onResize() {
    this.carouselWidth = window.innerWidth;
    this.updateCarousel();
  }

  updateCarousel() {
  const totalWidth = this.filteredProjects.length * this.cardWidth;
  const maxTranslate = totalWidth - this.carouselWidth;

  let translate = this.currentIndex * this.cardWidth;

  if (translate < 0) translate = 0;

  if (translate > maxTranslate) translate = maxTranslate;

  this.transform = `translateX(-${translate}px)`;
}


  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.filteredProjects.length;
    this.updateCarousel();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.filteredProjects.length) %
      this.filteredProjects.length;
    this.updateCarousel();
  }

  filterProjects(category: string) {
    this.activeCategory = category;
    this.filteredProjects =
      category === 'Tous'
        ? this.projects
        : this.projects.filter(p => p.category === category);

    this.currentIndex = 0;
    this.updateCarousel();
  }
 
openProject(project: Project) {
  this.selectedProject = project;
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
  this.selectedProject = null;
}

}
