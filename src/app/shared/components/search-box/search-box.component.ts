import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Output()
  public searchValue:EventEmitter<string>=new EventEmitter();
  @Input()
  public placeholder:string=''

  emitValue(value:string):void{
    this.searchValue.emit(value)
  }
}
