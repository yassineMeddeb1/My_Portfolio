import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class Skills {

  categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Networking & Linux', 'Cloud & DevOps', 'Methodologies'];
  activeCategory = 'All';
  showAll = false;
  initialLimit = 8;

  selectedCert: any = null;

  skills = [
    { name: 'Angular', level: 90, icon: 'fab fa-angular', category: 'Frontend', desc: 'Modern SPA development' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5', category: 'Frontend', desc: 'Semantic markup' },
    { name: 'CSS3', level: 92, icon: 'fab fa-css3-alt', category: 'Frontend', desc: 'Responsive layouts & animations' },
    { name: 'JavaScript', level: 88, icon: 'fab fa-js', category: 'Frontend', desc: 'Logic & interactions' },
    { name: 'UI/UX', level: 85, icon: 'fas fa-pencil-ruler', category: 'Frontend', desc: 'User-centered design' },
    { name: 'Spring Boot', level: 80, icon: 'fas fa-server', category: 'Backend', desc: 'RESTful APIs' },
    { name: 'Java', level: 85, icon: 'fab fa-java', category: 'Backend', desc: 'Backend business logic' },
    { name: 'Python', level: 82, icon: 'fab fa-python', category: 'Backend', desc: 'Automation & scripting' },
    { name: 'Flutter', level: 85, icon: 'fas fa-mobile-alt', category: 'Mobile', desc: 'Cross-platform apps' },
    { name: 'MySQL', level: 87, icon: 'fas fa-database', category: 'Database', desc: 'Relational databases' },
  ];

  certifications = [
    { name: 'LLM', institution: 'Cisco', year: '2023', image: 'assets/certification/Ai1.png', description: 'Network fundamentals and configuration', delay: 0.1 },
    { name: 'Deep Learning', institution: 'Linux Academy', year: '2022', image: 'assets/certification/Dep.png', description: 'Linux command line and basic administration', delay: 0.2 },
    { name: 'Angular Spring Boot', institution: 'AWS', year: '2023', image: 'assets/certification/AngSpring.png', description: 'Cloud basics and AWS services overview', delay: 0.3 },
    { name: 'GitHub Mastery', institution: 'GitHub', year: '2022', image: 'assets/certification/html1.jpg', description: 'Version control and collaboration', delay: 0.4 },
    { name: 'AWS Cloud Practitioner', institution: 'AWS', year: '2023', image: 'assets/certification/html2.jpg', description: 'Cloud basics and AWS services overview', delay: 0.5 },
    { name: 'GitHub Mastery', institution: 'GitHub', year: '2022', image: 'assets/certification/html3.jpg', description: 'Version control and collaboration', delay: 0.6 },
  ];

  get filteredSkills() {
    return this.activeCategory === 'All'
      ? this.skills
      : this.skills.filter(s => s.category === this.activeCategory);
  }

  get visibleSkills() {
    return this.showAll
      ? this.filteredSkills
      : this.filteredSkills.slice(0, this.initialLimit);
  }

  filterSkills(category: string) {
    this.activeCategory = category;
    this.showAll = false;
  }

  toggleShowMore() {
    this.showAll = !this.showAll;
  }

  openCertModal(cert: any) {
    this.selectedCert = cert;
  }

  closeCertModal() {
    this.selectedCert = null;
  }
}
