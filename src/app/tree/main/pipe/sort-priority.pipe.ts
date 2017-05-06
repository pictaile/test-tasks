import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPriority'
})
export class SortPriorityPipe implements PipeTransform {

  transform(items: any[], args: any): any {
    if (!items) {
      return items;
    }

    return items.sort( (a, b) => a.priority - b.priority);
  }

}
