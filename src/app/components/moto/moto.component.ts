// moto.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { IMoto } from '../../interfaces/moto.interface';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

export const carouselFade = trigger('carouselFade', [
  state('in', style({ transform: 'translateX(0)' })),
  state('outLeft', style({ transform: 'translateX(-100%)', display: 'none' })),
  state('outRight', style({ transform: 'translateX(100%)', display: 'none' })),

  transition('void => in', [
    style({ transform: 'translateX(100%)' }),
    animate('600ms ease-in', keyframes([
      style({ transform: 'translateX(100%)', offset: 0 }),
      style({ transform: 'translateX(0)', offset: 1.0 })
    ]))
  ]),

  transition('in => outLeft', [
    animate('600ms ease-out', keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(-100%)', offset: 1.0 })
    ]))
  ]),

  transition('in => outRight', [
    animate('600ms ease-out', keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(100%)', offset: 1.0 })
    ]))
  ]),

  transition('outRight => in', [
    style({ transform: 'translateX(100%)' }),
    animate('600ms ease-in', keyframes([
      style({ transform: 'translateX(100%)', offset: 0 }),
      style({ transform: 'translateX(0)', offset: 1.0 })
    ]))
  ]),

  transition('outLeft => in', [
    style({ transform: 'translateX(-100%)' }),
    animate('600ms ease-in', keyframes([
      style({ transform: 'translateX(-100%)', offset: 0 }),
      style({ transform: 'translateX(0)', offset: 1.0 })
    ]))
  ])
]);

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.scss'],
  animations: [carouselFade]
})
export class MotoComponent implements OnInit {
  @Input() moto!: IMoto;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  nextSlide() {
    const currentIndex = this.moto.imageSources.findIndex(image => image.currentItem);
    if (currentIndex !== -1) {
      this.moto.imageSources[currentIndex].currentItem = false;
      this.moto.imageSources[currentIndex].direction = 'outLeft';
      const nextIndex = (currentIndex + 1) % this.moto.imageSources.length;
      this.moto.imageSources[nextIndex].currentItem = true;
      this.moto.imageSources[nextIndex].direction = 'in';
    }
  }

  prevSlide() {
    const currentIndex = this.moto.imageSources.findIndex(image => image.currentItem);
    if (currentIndex !== -1) {
      this.moto.imageSources[currentIndex].currentItem = false;
      this.moto.imageSources[currentIndex].direction = 'outRight';
      const prevIndex = (currentIndex - 1 + this.moto.imageSources.length) % this.moto.imageSources.length;
      this.moto.imageSources[prevIndex].currentItem = true;
      this.moto.imageSources[prevIndex].direction = 'in';
    }
  }


  trackByFn(index: number, item: any): any {
    return item.src; // or any unique identifier of your items
  }

  goToArticle() {
    this.router.navigate(['/article', this.moto.name]);
  }
}
