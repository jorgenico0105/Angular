import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles:[
    `img{
      width:25px
    }`
  ]

})
export class PaisTableComponent {
  @Input()
  public pais:Pais[]=[] 
}
