import { Injectable } from '@angular/core';
import { TDigimon } from './digimonType';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  sharedArray: TDigimon[] = [];
  uniqueApi: TDigimon[] = [];

  setUniqueApi(array: TDigimon[]) {
    this.uniqueApi = array;
  }

  setAllApi(array: TDigimon[]){
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
