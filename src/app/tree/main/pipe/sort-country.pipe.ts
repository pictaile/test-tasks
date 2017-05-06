import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCountry'
})
export class SortCountryPipe implements PipeTransform {

  transform(items: any[], args: any): any {
    debugger;
    if (!items) {
      return items;
    }

    return items.sort( (a, b) => a.priority - b.priority);
  }

}
