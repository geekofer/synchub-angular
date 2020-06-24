import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any, term: string): any {
    if (!items && !term) {
      return items;
    }
    if (items && term) {
      return items.filter((item: any) =>
        item.login.toLowerCase().includes(term.toLocaleLowerCase())
      );
    } else {
      return items;
    }
  }
}
