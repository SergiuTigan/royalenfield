import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('autoVideo', { static: false }) autoVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const videoElement = this.autoVideo.nativeElement;
    const isDesktop = window.matchMedia('(min-width: 1280px)').matches;

    if (isDesktop) {
      videoElement.setAttribute('autoplay', 'true');
      videoElement.play();
    } else {
      videoElement.removeAttribute('autoplay');
      videoElement.pause();
    }
  }

}
