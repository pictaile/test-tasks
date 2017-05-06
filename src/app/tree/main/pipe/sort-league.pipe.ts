import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortLeague'
})
export class SortLeaguePipe implements PipeTransform {

  transform(items: any[], args: any): any {
    if (!items || items.length == 1) {
      return items;
    }

    return items.sort();
  }

}
