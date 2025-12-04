import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
   @ViewChild('trail') trail!: ElementRef;

  onMouseMove(event: MouseEvent) {
    const trailEl = this.trail.nativeElement;

    trailEl.style.left = event.pageX + 'px';
    trailEl.style.top = event.pageY + 'px';
  
}
}
