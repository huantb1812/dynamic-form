import { Pipe, PipeTransform } from '@angular/core';
import { DynamicForm } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return value;
  // }

  transform(items: DynamicForm[], term: string): DynamicForm[] {
    // I am unsure what id is here. did you mean title?
    return items.filter((item) => item.title.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }
}
