import {  Component,  ElementRef, HostListener, Input,Output, EventEmitter, Renderer } from '@angular/core';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent {

  sport:any = {};
  oCountry:boolean = false;
  oLeague:boolean = false;

  @Output('onSelected') private onSelected = new EventEmitter();
  @Input('setData') set setData(sport: any){
    this.sport = sport;
  }

  toggleLeague(country) {
    country.open = !country.open;
  }

  selected() {
    this.onSelected.emit(true);
  }

}
