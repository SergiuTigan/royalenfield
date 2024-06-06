import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class NavComponent {
  @ViewChild('navbarDefault') navbar!: ElementRef;

  constructor() { }

  toggleNavbar(): void{
    this.navbar.nativeElement.classList.toggle('hidden');
  }
}
