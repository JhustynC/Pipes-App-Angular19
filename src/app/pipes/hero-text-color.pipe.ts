import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroTextColor',
})
export class HeroTextPipe implements PipeTransform {
  transform(calor: Color): string {
    return ColorMap[calor];
  }
}
