import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountriePageComponent } from './pages/by-countrie-page/by-countrie-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { RegionTableComponent } from './components/region-table/region-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountriePageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
    PaisTableComponent,
    RegionTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
