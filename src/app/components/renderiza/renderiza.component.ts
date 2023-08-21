import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../apiService';
import { TDigimon } from '../digimonType';

@Component({
  selector: 'app-renderiza',
  templateUrl: './renderiza.component.html',
  styleUrls: ['./renderiza.component.css']
})
export class RenderizaComponent implements OnInit {
  digimons: TDigimon[] = [];

  constructor(private api: DataSharingService){}
  ngOnInit(): void {
    this.digimons = this.api.getUniqueApi();
    console.log(this.digimons);
    
  }

}
