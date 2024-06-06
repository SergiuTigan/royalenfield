import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMoto } from '../interfaces/moto.interface';

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {

  private jsonUrl = 'assets/models.json'; // Path to your JSON file
  private pricesJsonUrl = 'assets/prices.json'; // Path to your JSON file

  constructor(private http: HttpClient) {
  }

  getMotorcycles(): Observable<IMoto[]> {
    return this.http.get<IMoto[]>(this.jsonUrl);
  }

  getPrices(): Observable<{ name: string, prices: Array<any> }> {
    return this.http.get<{ name: string, prices: Array<any> }>(this.pricesJsonUrl);
  }
}
