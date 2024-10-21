import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: ``
})
export class ByCountriePageComponent {
  public paises:Pais[]=[]
  constructor (private service:CountryService){
  }

  searchByCapital(value:string){
    this.service.searchCountry(value)
    .subscribe(countries=> {
      this.paises=countries
    })
  }
}
