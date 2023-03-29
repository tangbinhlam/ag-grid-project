import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOlympicWinners } from './models/OlypicWinners.model';

@Injectable({
  providedIn: 'root'
})
export class OlympicWinnersService {

  constructor( public http: HttpClient) { }

  getData$(): Observable<IOlympicWinners[]> {
    return this.http.get<IOlympicWinners[]>('https://www.ag-grid.com/example-assets/olympic-winners.json');
  }

  getChartData$(): Observable<IOlympicWinners[]> {
    return this.http.get<IOlympicWinners[]>('https://www.ag-grid.com/example-assets/wide-spread-of-sports.json');
  }

}
