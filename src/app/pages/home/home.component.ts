import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/components/apiService';
import { TDigimon } from 'src/app/components/digimonType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  disabled: boolean = true;
  digimons:TDigimon[] = [];

  constructor(private api:DataSharingService){}
  async ngOnInit(): Promise<void>{ {
    const result = await this.api.getSharedArray();
    if(result.length > 0) {
      this.digimons = result;
      this.api.setAllApi(result);
      this.disabled = false;
      
    }
    
    
  }
}

}
