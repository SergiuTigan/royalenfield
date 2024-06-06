import { Component, OnInit } from '@angular/core';
import { IMoto } from '../../interfaces/moto.interface';
import { MotorcycleService } from '../../services/motorcycle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  motos: IMoto[] = [];

  constructor(private motorcycleService: MotorcycleService) {
  }

  ngOnInit() {
    this.motorcycleService.getMotorcycles().subscribe((data: IMoto[]) => {
      this.motos = data;
    });
  }
}
