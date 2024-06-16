import { Component, OnInit } from '@angular/core';
import { IMoto } from '../../interfaces/moto.interface';
import { MotorcycleService } from '../../services/motorcycle.service';

@Component({
  selector: 'app-motorcycles',
  templateUrl: './motorcycles.component.html',
  styleUrls: ['./motorcycles.component.scss']
})
export class MotorcyclesComponent implements OnInit {
  motos: IMoto[] = [];

  constructor(private motorcycleService: MotorcycleService) {
  }

  ngOnInit() {
    this.motorcycleService.getMotorcycles().subscribe((data: IMoto[]) => {
      this.motos = data;
    });
  }
}
