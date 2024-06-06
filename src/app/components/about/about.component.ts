import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  noOfCoffees = 0;
  noOfMotorcycles = 0;
  noOfClients = 0;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      if (this.noOfCoffees !== 520) {
        this.noOfCoffees = this.noOfCoffees + 10;
      }
    }, 100);

    setInterval(() => {

      if (this.noOfMotorcycles !== 42) {
        this.noOfMotorcycles++;
      }
    }, 80);

    setInterval(() => {

      if (this.noOfClients !== 77) {
        this.noOfClients++;
      }
    }, 60);
  }
}
