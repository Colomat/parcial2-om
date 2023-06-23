import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {Change} from 'src/app/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {
  getExchangesById(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) {}

   
   getDatos(){
    
    return this.http.get<Change[]>('https://api.coingecko.com/api/v3/exchanges');

    
   }

   
}
