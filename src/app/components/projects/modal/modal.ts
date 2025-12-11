import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class ProjectModal {
  @Input() project!: Project;
  @Output() close = new EventEmitter<void>();

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.project.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.project.images.length) %
      this.project.images.length;
  }
}
