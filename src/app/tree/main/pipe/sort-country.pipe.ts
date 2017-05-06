import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCountry'
})
export class SortCountryPipe implements PipeTransform {

  transform(items: any[], args: any): any {
    if (!items || items.length == 1) {
      return items;
    }

    return items.sort();
  }

}
