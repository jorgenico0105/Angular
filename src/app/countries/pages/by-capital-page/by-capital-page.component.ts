import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public countries:Country[]=[]
  constructor (private service:CountryService){
  }

  searchByCapital(value:string){
    this.service.searchCapital(value)
    .subscribe(countries=> {
      this.countries=countries
    })
  }
}
