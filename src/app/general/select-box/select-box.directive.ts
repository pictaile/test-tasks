import {  Component,  Directive, ElementRef, HostListener, Input,Output, EventEmitter, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'select-box',
  templateUrl: './select-box.directive.html'
})

export class SelectBoxDirective {

  private show = false;

  private selected =  {id:'', text:'all'};

  private data = [
    {id: '', text:'all'},
  ];

  private disabled = false;

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.show = false;
    }
  }

  @Input('setData') set setData(data: any) {
    this.data = data;
    var self = this;
    if(this.data.length > 0) {
      if(this.selected) {
        var selected = this.data.filter(function (item) {
          return item.id == self.selected.id;
        });
        if(selected.length > 0) {
          this.selected = selected[0];
        } else {
          this.selected = this.data[0];
        }
      }
    }
  }

  @Input('setSelected') set setSelected(data: any) {
    this.selected = data;

  }

  @Input('disabled') set setDisabled(state:boolean) {
    this.disabled = state;
  }

  @Output('onSelect') public select = new EventEmitter();

  change(data) {
    this.selected = data;
    this.show = false;
    this.select.emit(this.selected);
  }

}
