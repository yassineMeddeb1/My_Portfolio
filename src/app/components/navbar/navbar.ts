import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // Initialisation optionnelle si besoin
  }

  // Méthode pour fermer le menu sur mobile après clic
  closeNavbar(): void {
    const navbarCollapse = document.getElementById('menu');
    if (navbarCollapse?.classList.contains('show')) {
      // Utilisez Bootstrap pour fermer
      const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  }
}