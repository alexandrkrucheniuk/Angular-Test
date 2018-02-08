import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortByDay'
})
export class SortByDayPipe implements PipeTransform {

  transform(items: any, day: string): any[] {
    let array = [];
    if (!items) return;
    for (let key in items) {
      if (items[key].day === day) {
        array.push(items[key]);
      }
    }
    return array;
  }

}
