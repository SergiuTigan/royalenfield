import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotorcycleService } from '../../services/motorcycle.service';
import { IMoto } from '../../interfaces/moto.interface';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  motorcycle!: IMoto;
  motorcyclePrices: any = [];

  constructor(private route: ActivatedRoute,
              private motorcycleService: MotorcycleService) {
  }

  ngOnInit() {
    this.motorcycleService.getMotorcycles().subscribe((data: IMoto[]) => {
      this.motorcycle = data.find((moto: IMoto) => moto.name === this.route.snapshot.params['id']) || <IMoto>{};
    });
    this.motorcycleService.getPrices().subscribe((data: any) => {
      this.motorcyclePrices = data.filter((moto: any) => moto.name === this.route.snapshot.params['id']);
    });
  }
}
