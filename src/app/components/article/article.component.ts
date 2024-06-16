import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotorcycleService } from '../../services/motorcycle.service';
import { IMoto } from '../../interfaces/moto.interface';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  motorcycle!: IMoto;
  motorcyclePrice!: string;
  motorcyclePrices: any = [];
  imageSource!: string;
  colorName!: string;
  showModal = false;

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

  openModal(color: { name: string, src: string }, price: any) {
    this.colorName = `${this.motorcycle.titlu} - ${color.src}`;
    this.motorcyclePrice = price.price;
    this.imageSource = `assets/moto/${this.motorcycle.name}/${color.src}.png`;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
