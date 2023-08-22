import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'front-end') return 'code';
    else if (value === 'back-end') return 'computer';

    return 'code';
  }
}
