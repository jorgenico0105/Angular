import { Component } from '@angular/core';
import { Region } from '../../interfaces/region';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public region:Region[]=[]
  constructor (private service:CountryService){
  }

  searchByCapital(value:string){
    this.service.searchRegion(value)
    .subscribe(countries=> {
      this.region=countries
    })
  }
}
