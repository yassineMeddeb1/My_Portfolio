import {
  Component,
  HostListener,
  AfterViewInit,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
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
  liveDemo?: string;
  features?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModal],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px) scale(0.9)' }),
        animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
          style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ]
})
export class Projects implements OnInit, AfterViewInit {
  categories = ['Tous', 'Web', 'Mobile', 'Backend', 'FullStack', 'DevOps'];
  activeCategory = 'Tous';
  selectedProject: Project | null = null;
  isModalOpen = false;
  
  projects: Project[] = [
    {
      id: 1,
      name: 'Portfolio Angular',
      shortDesc: 'Modern interactive portfolio with 3D effects',
      fullDesc: 'A sophisticated portfolio built with Angular featuring smooth animations, 3D carousels, and interactive UI elements.',
      tech: ['Angular', 'TypeScript', 'SCSS', 'Three.js'],
      images: [
        'assets/projects/Immobilier/immo1.png',
        'assets/projects/Immobilier/immo2.png',
        'assets/projects/Immobilier/immo3.png',
        
      ],
      category: 'Web',
      githubLink: 'https://github.com/username/portfolio',
      liveDemo: 'https://portfolio-demo.com',
      features: ['3D Animations', 'Responsive Design', 'PWA Support', 'SEO Optimized']
    },
    {
      id: 2,
      name: 'E-commerce Mobile App',
      shortDesc: 'Cross-platform shopping application',
      fullDesc: 'Flutter e-commerce app with real-time inventory, payment integration, and AR product preview.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
      images: [
        'assets/projects/Immobilier/immo6.png',
        'assets/projects/Immobilier/immo3.png',
        'assets/projects/Immobilier/immo3.png',
      ],
      category: 'Mobile',
      githubLink: 'https://github.com/username/ecommerce-app',
      liveDemo: 'https://play.google.com/store/apps/details?id=com.example.app',
      features: ['AR Product Preview', 'Real-time Chat', 'Secure Payments', 'Offline Mode']
    },
    {
      id: 3,
      name: 'Microservices API',
      shortDesc: 'Scalable backend architecture',
      fullDesc: 'Microservices-based API using Spring Boot with Redis caching, message queues, and API gateway.',
      tech: ['Spring Boot', 'Redis', 'Kafka', 'Docker', 'PostgreSQL'],
      images: [
        'assets/projects/api/1.png',
        'assets/projects/api/2.png'
      ],
      category: 'Backend',
      githubLink: 'https://github.com/username/microservices-api',
      features: ['Load Balancing', 'Circuit Breaker', 'JWT Authentication', 'API Documentation']
    },
    {
      id: 4,
      name: 'Task Management Platform',
      shortDesc: 'Full-stack project management tool',
      fullDesc: 'Collaborative platform with real-time updates, file sharing, and team communication features.',
      tech: ['Angular', 'Spring Boot', 'WebSocket', 'AWS S3', 'MongoDB'],
      images: [
        'assets/projects/Immobilier/immo4.png',
        'assets/projects/Immobilier/immo5.png',
        'assets/projects/Immobilier/immo3.png',
      ],
      category: 'FullStack',
      githubLink: 'https://github.com/username/task-manager',
      liveDemo: 'https://taskmanager-demo.com',
      features: ['Real-time Collaboration', 'File Sharing', 'Time Tracking', 'Analytics Dashboard']
    },
    {
      id: 5,
      name: 'AI Analytics Dashboard',
      shortDesc: 'Machine learning insights platform',
      fullDesc: 'Dashboard for visualizing AI model predictions with interactive charts and real-time data.',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
      images: [
        'assets/projects/Immobilier/dash1.png',
        'assets/projects/Immobilier/dash2.png',
        'assets/projects/Immobilier/dash3.png',
      ],
      category: 'FullStack',
      githubLink: 'https://github.com/username/ai-dashboard',
      liveDemo: 'https://ai-dashboard-demo.com',
      features: ['Real-time Analytics', 'Predictive Models', 'Custom Reports', 'Export Functionality']
    },
    {
      id: 6,
      name: 'Social Media API',
      shortDesc: 'REST API for social platform',
      fullDesc: 'High-performance API supporting user interactions, media uploads, and notifications.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'AWS'],
      images: [
        'assets/projects/social-api/1.png'
      ],
      category: 'Backend',
      githubLink: 'https://github.com/username/social-api',
      features: ['Real-time Notifications', 'Media Processing', 'Scalable Architecture', 'Rate Limiting']
    },
    {
      id: 7,
      name: 'Fitness Tracker',
      shortDesc: 'Mobile fitness application',
      fullDesc: 'Health and fitness tracker with workout plans, nutrition logging, and progress analytics.',
      tech: ['React Native', 'Redux', 'GraphQL', 'Firebase'],
      images: [
        'assets/projects/fitness/1.png',
        'assets/projects/fitness/2.png'
      ],
      category: 'Mobile',
      githubLink: 'https://github.com/username/fitness-tracker',
      features: ['Workout Plans', 'Nutrition Tracking', 'Progress Analytics', 'Community Features']
    },
    {
      id: 8,
      name: 'CI/CD Pipeline',
      shortDesc: 'DevOps automation platform',
      fullDesc: 'Automated deployment pipeline with testing, security scanning, and monitoring.',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana'],
      images: [
        'assets/projects/devops/1.png',
        'assets/projects/devops/2.png'
      ],
      category: 'DevOps',
      githubLink: 'https://github.com/username/cicd-pipeline',
      features: ['Automated Testing', 'Security Scanning', 'Monitoring', 'Rollback Capability']
    }
  ];

  filteredProjects: Project[] = [];
  currentIndex = 0;
  cardWidth = 375;
  carouselWidth = 1200;
  transform = 'translateX(0px)';
  visibleCards = 3;
  autoPlayInterval: any;

  ngOnInit() {
    this.filteredProjects = [...this.projects];
    this.calculateVisibleCards();
  }

  ngAfterViewInit() {
    this.updateCarousel();
    this.startAutoPlay();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateVisibleCards();
    this.updateCarousel();
  }

  calculateVisibleCards() {
    const width = window.innerWidth;
    if (width < 576) {
      this.visibleCards = 1;
      this.cardWidth = 280;
    } else if (width < 768) {
      this.visibleCards = 1;
      this.cardWidth = 300;
    } else if (width < 992) {
      this.visibleCards = 2;
      this.cardWidth = 320;
    } else if (width < 1200) {
      this.visibleCards = 2;
      this.cardWidth = 340;
    } else {
      this.visibleCards = 3;
      this.cardWidth = 375;
    }
    this.carouselWidth = window.innerWidth;
  }

  updateCarousel() {
    const totalWidth = this.filteredProjects.length * this.cardWidth;
    const maxTranslate = Math.max(0, totalWidth - this.carouselWidth + 100);
    
    let translate = this.currentIndex * this.cardWidth;
    translate = Math.max(0, Math.min(translate, maxTranslate));
    
    this.transform = `translateX(-${translate}px)`;
  }

  next() {
    const maxIndex = Math.max(0, this.filteredProjects.length - this.visibleCards);
    this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
    this.updateCarousel();
    this.resetAutoPlay();
  }

  prev() {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
    this.updateCarousel();
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    this.currentIndex = index * this.visibleCards;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  getCurrentDot(): number {
    return Math.floor(this.currentIndex / this.visibleCards);
  }

  getTotalDots(): number {
    return Math.ceil(this.filteredProjects.length / this.visibleCards);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      if (this.currentIndex >= this.filteredProjects.length - this.visibleCards) {
        this.currentIndex = 0;
      } else {
        this.next();
      }
    }, 5000);
  }

  resetAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.startAutoPlay();
    }
  }

  filterProjects(category: string) {
    this.activeCategory = category;
    this.filteredProjects = category === 'Tous' 
      ? [...this.projects]
      : this.projects.filter(p => p.category === category);
    
    this.currentIndex = 0;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  openProject(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
    this.resetAutoPlay();
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
  }

  viewAllProjects() {
    this.activeCategory = 'Tous';
    this.filterProjects('Tous');
  }
}