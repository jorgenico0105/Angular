import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable,of,tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { Pais } from '../interfaces/pais';
import { Region } from '../interfaces/region';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl:string="https://restcountries.com/v3.1"
  constructor(private httpClient:HttpClient) { }

  searchCapital(capital:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${capital}`)
    .pipe(
      catchError(err => of([]))
    )
  } 
  searchCountry(country:string):Observable<Pais[]>{ 
    return this.httpClient.get<Pais[]>(`${this.apiUrl}/name/${country}`)
    .pipe(
      catchError(err => of([]))
    )
  }
  searchRegion(region:string):Observable<Region[]>{ 
    return this.httpClient.get<Region[]>(`${this.apiUrl}/region/${region}`)
    .pipe(
      catchError(err => of([]))
    )
  }
}
