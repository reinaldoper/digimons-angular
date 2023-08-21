import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/components/apiService';
import { TDigimon } from 'src/app/components/digimonType';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  digimon: TDigimon[] = [];
  word: string = '';

  constructor(private api:DataSharingService, private route: Router,){}
  checkClass(target: any): void {
    const { value } = target;
    this.word = value;
   }

  clickList(){
    const result = this.api.getAllApi();
    const response = result.filter(res => res.level === this.word);
    if(response.length > 0){
      this.api.setUniqueApi(response);
      this.word = '';
      this.route.navigate(['/renderiza']);
    }
    this.word = '';

  }
}
