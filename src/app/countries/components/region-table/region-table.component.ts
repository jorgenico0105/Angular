import { Component, Input, input } from '@angular/core';
import { Region } from '../../interfaces/region';

@Component({
  selector: 'app-region-table',
  templateUrl: './region-table.component.html',
  styles:[
    `img{
      width:25px
    }`
  ]
})
export class RegionTableComponent {
  @Input()
  public region:Region[]=[]
}
