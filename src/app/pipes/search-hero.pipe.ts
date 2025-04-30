import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'searchHero',
})
export class NamePipe implements PipeTransform {
  transform(value: Hero[], searchValue: string): Hero[] {
    if (!searchValue) {
      return value;
    }

    const search = searchValue.toLowerCase();

    return value.filter((hero) => {
      return hero.name.toLowerCase().includes(search);
    });
  }
}
