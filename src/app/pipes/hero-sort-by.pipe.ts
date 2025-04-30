import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
    console.log({ sortBy });

    if (!sortBy) {
      return value;
    }

    switch (sortBy) {
      case 'name':
        value.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'canFly':
        value.sort((a, b) => Number(a.canFly) - Number(b.canFly));
        break;
      case 'color':
        value.sort((a, b) => a.color - b.color);
        break;
      case 'creator':
        value.sort((a, b) => a.creator - b.creator);
        break;
      default:
        break;
    }

    return value;
  }
}

