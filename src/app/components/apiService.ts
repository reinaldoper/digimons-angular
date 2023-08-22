import { Injectable } from '@angular/core';
import { TDigimon } from './digimonType';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  sharedArray: TDigimon[] = [];
  uniqueApi: TDigimon[] = [];
  url: string = 'https://digimon-api.vercel.app/api/digimon'

  constructor(private http: HttpClient) { }

  setUniqueApi(array: TDigimon[]) {
    this.uniqueApi = array;
  }

  setAllApi(array: TDigimon[]) {
    this.sharedArray = array;
  };

  getAllApi(): TDigimon[] {
    return this.sharedArray;
  };

  async getSharedArray(): Promise<TDigimon[]> {
    try {
      const url = 'https://digimon-api.vercel.app/api/digimon'
      const result = await fetch(url);
      const response = await result.json();

      this.sharedArray = response;
      return this.sharedArray;
    }

    catch (error) {
      console.error('Erro ao buscar dados:', error);
      return []
    }
      

  }

  getUniqueApi(): TDigimon[] {
    return this.uniqueApi;
  }

}
